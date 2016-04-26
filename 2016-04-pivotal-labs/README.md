```
┌─────────────────────────┐
│                         │██
│    Virtual no more      │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-04-26           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Hello, I'm Yosh
- unix
- node
- consulting
- grumpy old man

---
## Virtual no more
- State of the stack
- React, the good parts
- What's next?

---
## State of the stack
- jQuery
- Backbone
- Angular
- React

---
## State of the stack
- react
- redux
- react-router
- webpack
- bunch of boilerplate

---
## State of the stack
> "What are all these words?"
(Me, looking at every new JS framework)

---
## React, the good parts
```txt
┌───────┐  ┌─────────┐   ┌──────┐
│       │  │         │   │      │
│       │  │         │   │      │
│       │  │         │   │      │
│       ◀──│  Logic  │◀──┤      │
│       │  │         │   │      │    ┌────┐
│ State │  │         │   │ View │◀──▶│User│
│       │  │         │   │      │    └────┘
│       │  └─────────┘   │      │
│       │                │      │
│       ├────────────────▶      │
│       │                │      │
└───────┘                └──────┘
```

---
## React, the good parts
- unidirectional data flow
- event-driven
- data down, events up
- renders on server and client

---
## What's next?
- Keep React's good parts
- Never be tied to a framework again

---
## What's next?
Google (plus) 60kb challenge
- < 60kb html
- < 60kb css
- < 60kb js

---
## What's next?
- global
- hyperx
- morphdom
- bel
- yo-yo

---
## What's next?
```js
const document = require('global/document')
const el = document.createElement('div')
// look ma, no browser
```

---
## What's next?
```js
const yo = require('yo-yo')
const el = yo`<div></div>`
// still no browser required, no es6 even
```

---
## What's next?
```js
const yo = require('yo-yo')
const el = yo`<div onclick=${hc}></div>`

function hc (ev) {
  // handle click
}
```

---
## What's next?
```js
const tree = yo.update(oldNode, newNode)
document.appendChild(tree)
```

---
## What's next?
- just DOM elements
- works on the server
- arbitrary architectures
- not bound to any framework
- be fast, be light

---
## <hey onclick=${thank.bind(null, 'you')} />
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2016-04-pivotal-labs
- npm i -g tslide to view the slides
