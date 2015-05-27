# unbundling the frontend

Yoshua Wuyts

  http://yoshuawuyts.com
  https://{github,twitter}.com/yoshuawuyts
  https://npmjs.org/~yoshuawuyts

```
$ npm install -g tslide
$ tslide slides.md
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
document.createElement('button', 'custom-button')
```

---

# custom elements

render a custom element from html:

``` html
<button is="custom-button">foobar</button>
```

---

# custom elements

lifecycle hooks:

```
.createdCallback()          // after element was created
.attachedCallback()         // after element was attached to DOM
.detachedCallback()         // after element was detached from dom
.attributeChangedCallback() // on element attribute change
```

---

# base-element

``` js
const createElement = require('base-element')
const vhtml = require('virtual-html')

const el = createElement(document.body)
el.render(() => el.html(vhtml(`<button>click me</button>`)))
```

---

# base-element

``` js
const createElement = require('base-element')
const vhtml = require('virtual-html')

const el = createElement(document.body)
el.render(() => {
  const html = el.html(vhtml(`<button>click me</button>`))
  html.onclick = () => {
    window.alert(e.target.innerText + ' button was clicked')
  }
  return html
})
```

---
