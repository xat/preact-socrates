/**
 * Module Dependencies
 */

var preact = require('preact')
var cycle = require('./cycle')
var Render = preact.render
var h = preact.h

/**
 * Export `render`
 */

module.exports = render
render.render = render
render.h = h

/**
 * Render
 *
 * @param {Renderable} Renderable
 * @param {Store} data
 * @param {Object} parent
 * @return {Object}
 */

function render (Renderable, data, parent) {
  var renderer = Renderer(Renderable, parent)
  return cycle(renderer, data)
}

/**
 * Renderer
 *
 * @param {Renderable} Renderable
 * @param {Object} parent
 */

function Renderer (Renderable, parent) {
  var root = null

  return function render (props) {
    root = Render(h(Renderable, props), parent, root)
  }
}
