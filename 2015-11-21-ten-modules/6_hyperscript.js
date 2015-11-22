const h = require('hyperscript')

const el = h('div#page', [
  h('div.hello', [
    h('p', 'hi'),
    h('p', 'world')
  ])
])

// node
// console.log(el.outerHTML)

// browser with budo
document.querySelector('body').appendChild(el)
