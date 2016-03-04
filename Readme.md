
# preact-socrates

  [preact](http://github.com/developit/preact) plugin for [socrates](http://github.com/matthewmueller/socrates).

## Install

```bash
npm install preact-socrates
```

## Example

```js
import { render, h } from 'preact-socrates'
import Logger from 'redux-logger'
import Socrates from 'socrates'

/**
 * Create our virtual dom tree
 */

const Home = ({ dispatch, greeting }) => (
  <div class='home'>
    <h2>{ greeting }</h2>
    <button onClick={(e) => dispatch('change greeting', { greeting: 'Hey bud' })}>Change the greeting</button>
  </div>
)

/**
 * Initialize our store
 */

let store = Socrates([
  Logger()
])

/**
 * Initial application state
 */

store('boot', {
  greeting: 'Welcome to the website, friend!'
})

/**
 * Render our virtual dom tree to the <body>
 */

render(App, store, document.body)
```

## License

MIT
