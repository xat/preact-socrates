/**
 * Module Dependencies
 */

var assign = require('object-assign')
var raf = require('component-raf')

/**
 * Export `cycle`
 */

module.exports = cycle

/**
 * Create the "cycle"
 *
 * @param {Function} renderer
 * @param {Object} data
 */

function cycle (renderer, store) {
  var debounce

  // render
  function render () {
    clearTimeout(debounce)
    debounce = null
    return renderer(assign({ dispatch: dispatch }, store() ))
  }

  // subscribe to changes
  store.subscribe(function () {
    if (!debounce) debounce = raf(render)
  })

  // dispatch via socrates
  function dispatch () {
    return store.apply(null, arguments)
  }

  return render()
}
