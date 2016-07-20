const choo = require('choo')
const html = require('choo/html')

const app = choo()

app.model({
  state: {
    counter: 0
  },
  reducers: {
    incr: (data, state) => ({ counter: state.counter + 1 }),
    decr: (data, state) => ({ counter: state.counter - 1 })
  }
})

// router
app.router((route) => [
  route('/', button)
])

const tree = app.start()
document.body.appendChild(tree)

// our v cute view
function button (state, prev, send) {
  const counter = state.counter
  return html`
  <main>
    <p>counter is ${counter}</p>
    <button onclick=${() => send('incr')}>incr</button>
    <button onclick=${() => send('decr')}>decr</button>
  </main>
  `
}

