```
┌─────────────────────────┐
│                         │██
│   Choo -                │██
│   The little framework  │██
│   That Could            │██
│                         │██
│   Yoshua Wuyts          │██
│   2016-04-26            │██
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
## Choo
- State of the stack
- Features
- Usage
- Concepts
- What's next?

---
## State of the stack
- React
- Preact
- Angular
- Angular2

---
## State of the stack
- React: 43kb + deps + JSX
- Preact: 3kb + deps + JSX
- Angular: 55.35kb + deps
- Angular2: 135kb + deps + RxJS + typescript

---
## State of the stack
And that's not even
considering API surface

---
## Features
Choo 🚂 🚋🚋🚋🚋🚋🚋
- fun!
- small bundle size (7kb)
- small api surface
- ELM architecture
- built on prior tech
- ship with everything you need

---
## Usage
```js
const choo = require('choo')
const app = choo()
choo.router((route) => [
  route('/', () => choo.view`<h1>Hello Tokyo!</h1>`)
])
document.body.appendChild(app.start())
```

---
## Usage
Or in 140 characters:
https://twitter.com/yoshuawuyts/status/733937424531750912
```js
var c = require('choo')
var a = choo()
a.router(r => [
  r('/', () => c.view`<h1>Hello Tokyo!</h1>`)
])
document.body.appendChild(a.start())
```

---
## Concepts
```txt
 ┌───────────────────────────┐     ┌────────┐
 │    ┌─────────────────┐    │     │  User  │
 ├────│  Subscriptions  │    │     └────────┘
 │    ├─────────────────┤    │          │
 └────│     Effects     │◀───┤          ▼
      ├─────────────────┤  Actions ┌────────┐
      │    Reducers     │◀───┴─────│  DOM   │
    Models──────────────┘          └────────┘
               │                        ▲
             State                   DOM│tree
               ▼                        │
          ┌────────┐               ┌────────┐
          │ Router │─────State ───▶│ Views  │
          └────────┘               └────────┘
```

---
## Concepts
- view: inline HTML with click handlers
- model: perform actions on data
- action: object with a name and data
- reducers: modify state
- state: single object with all state

---
## Concepts
Views
```js
const attr = 'kawaiii'
const view = choo.view`
  <h1>You're super ${attr}</h1>
`
```

---
## Concepts
Models
```js
const app = choo()
app.model('api', {
  state: { count: 0 }
  reducers: {
    increment: function (state, action) {
      return { count: count += 1 }
    }
  }
})
// then `send('api:increment')`
```

---
## Concepts
Sending data
```js
app.router((route) => [
  route('/', (params, state, send) choo.view`
    <a onclick=${(e) => send('api:increment')}>
      Click me
    </a>
  `)
])
app.start()
```

---
## Concepts
For async:
- use effects to do perform side effects
- side effects are things like HTTP requests
- use subscriptions to listen to data
- like listening to keyboard events
- or listening to websockets

---
## Demos!
[ mailbox ]

---
## What's next?
- server side rendering (today!)
- optional packages (websockets, SSE, markdown)
- unit tests?
- more examples!

---
## thank you!
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2016-05-nodeschool-tokyo
- npm i -g tslide to view the slides
