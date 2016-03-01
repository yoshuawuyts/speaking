const vdom = require('virtual-dom')
const hyperx = require('hyperx')
const sf = require('sheetify')

const hx = hyperx(vdom.h)

// section { background-color: grey; }
const prefix = sf('./demo-3.css', { global: true })

const tree = hx`
  <section>
    <h1 className=${prefix}>My beautiful, centered title</h1>
  </section>
`

document.body.appendChild(vdom.create(tree))
