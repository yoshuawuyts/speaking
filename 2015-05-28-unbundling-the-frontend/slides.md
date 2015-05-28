# unbundling the frontend

Yoshua Wuyts

  http://yoshuawuyts.com
  https://{github,twitter}.com/yoshuawuyts
  https://npmjs.org/~yoshuawuyts

```
$ npm install -g tslide
$ tslide README.md
```

Frontend Developer Meetup Ams May 2015

---

# unix philosophy

```
'Make each program do one thing well.'
```
---

# unix philosophy

```
'Make each program do one thing well.'
+ 'To do a new job, build afresh rather than complicate'
+ 'old programs by adding new features.'
```

---

# unix philosophy

- modularity - write simple parts connected by clean interfaces
- composition - design programs to be connected with other programs
- parsimony - write a big program only as a last resort
- separation - split the engine from the interface

---

# custom elements

```
Create your own HTML tags and elements
```

---

# custom elements

register a custom element:

``` js
document.registerElement('custom-button', {
  prototype: Object.create(window.HTMLButtonElement.prototype),
  extends: 'button'
})
```

---

# custom elements

render a custom element:

``` js
document.createElement('custom-button')
document.createElement('button', 'custom-button')
```

---

# custom elements

render a custom element from html:

``` html
<custom-button>foobar</custom-button>
<button is="custom-button">foobar</button>
```

---

# custom elements

lifecycle hooks:

``` js
.createdCallback()          // after element was created
.attachedCallback()         // after element was attached to DOM
.detachedCallback()         // after element was detached from dom
.attributeChangedCallback() // on element attribute change
```

---

# virtual-dom

```
All the benefits of React with none of the cruft
```

---

# virtual-dom

performant elements:

``` js
const createElement = require('virtual-dom/create-element')
const h = require('virtual-dom/h')

const tree = h('div', 'pumpkin pie')
const el = createElement(tree)
document.body.appendChild(el)
```

---

# virtual-dom

performant & pretty elements:

``` js
const createElement = require('virtual-dom/create-element')
const vhtml = require('virtual-html')

const tree = vhtml('<div>pumpkin pie</div>')
const el = createElement(tree)
document.body.appendChild(el)
```

---

# virtual-dom

render loop:

``` js
setInterval(() => {
  var newTree = render(count)
  var patches = diff(tree, newTree)
  rootNode = patch(rootNode, patches)
  tree = newTree
}, 1000)
```

---

# base-element

api:

``` js
el = baseElement(targetNode) // create new base element
el.on(event, cb)             // event handler
el.html(tag, opts, value)    // create virtual-hyperscript nodes
el.toString(data)            // render nodes as html
```

---

# base-element

static element:

``` js
const createElement = require('base-element')
const vhtml = require('virtual-html')

const el = createElement(document.body)
el.render(() => el.html(vhtml(`<button>click me</button>`)))
```

---

# base-element

event:

``` js
const createElement = require('base-element')
const vhtml = require('virtual-html')

const el = createElement(document.body)
el.render(() => {
  const html = el.html(vhtml(`<button>click me</button>`))
  html.on('click', () => {
    window.alert(e.target.innerText + ' button was clicked')
  })
  return html
})
```

---

# base-element

server side rendering:

``` js
const createElement = require('base-element')
const vhtml = require('virtual-html')

const el = createElement(document.body)
el.render(text => el.html(vhtml(`<button>${text}</button>`)))

el.toString('SOUND THE ALARM')
// => '<button>SOUND THE ALARM</button>'
```

---

# base-element

with custom elements:

``` js
const createCustom = require('custom-element')
const createElement = require('base-element')
const vhtml = require('virtual-html')

const custom = createCustom()
custom.on('created', () => {
  const el = createElement(custom)
  el.render(text => el.html(vhtml(`<button>${text}</button>`)))
})
```

---

# css-modules

```
Every selector has the potential to have unintended side effects
by targeting unwanted elements or clashing with other selectors.
```

---

# css-modules

explicit exports:

``` css
.foo {
  font-size: 2rem;
}

/* exported globally */
:global .foo {
  color: green;
}
```

---

# css-modules

module usage:

``` js
import styles from './styles.css'

el.innerHTML = `
  <div class="${styles.foo}">wombat</div>
`
```

---

# css-modules

resulting html:

``` css
<div class="foo_zxcz89x7cx">wombat</div>
```

---

# data fetching

- relay?
- graphql?
- window.fetch?

---

# learn more

- https://github.com/shama/base-element
- https://github.com/Matt-Esch/virtual-dom
- https://github.com/Raynos/main-loop

---

# learn more

- https://github.com/css-modules/css-modules
- http://webcomponents.org/articles/interview-with-joshua-peek/
- https://github.com/yoshuawuyts/knowledge/blob/master/modules.md#dom

---

# thanks

``` js
const el = document.createElement('span')
el.textContent = 'thank you!'
document.body.appendChild(el)
```

---

# thanks

``` html
<span>thank you!</span>
```
