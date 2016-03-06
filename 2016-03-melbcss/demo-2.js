const vdom = require('virtual-dom')
const hyperx = require('hyperx')
const sf = require('sheetify')

const hx = hyperx(vdom.h)

sf('css-wipe')
sf('css-type-base')

const prefix = sf`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-family: sans-serif;
  }
`

const tree = hx`
  <section className=${prefix}>
    <h1>My beautiful, centered title</h1>
  </section>
`

document.body.appendChild(vdom.create(tree))
