/**
 * Module Dependencies
 */

var react = require('react')
var reactDom = require('react-dom')
var cycle = require('./cycle')
var Render = reactDom.render.bind(reactDom)

/**
 * Export `render`
 */

module.exports = render
render.render = render

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
    root = Render(react.createElement(Renderable, props), parent, root)
  }
}
