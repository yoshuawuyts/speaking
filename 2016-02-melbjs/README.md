```
┌─────────────────────────┐
│                         │██
│    virtual-what?        │██
│                         │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-02-10           │██
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
## Another stack
- state of the stack
- why something else
- concepts
- components
- stuff it doesn't do

---
## State of the stack
- react
- redux
- react-router
- redux router
- history.js
- postcss
- css-modules
- webpack

---
## Why something else
- control
- file size
- integration
- opinions

---
## Concepts
MVC
- separation of data, logic and representation
- can be interpreted in different ways
- minimum viable separation

---
## Concepts
```txt
┌───────┐  ┌──────────┐   ┌──────┐
│       │  │          │   │      │
│       │  │          │   │      │
│       │  │          │   │      │
│       ◀──│Controller│◀──┤      │
│       │  │          │   │      │    ┌────┐
│ Model │  │          │   │ View │◀──▶│User│
│       │  │          │   │      │    └────┘
│       │  └──────────┘   │      │
│       │                 │      │
│       ├─────────────────▶      │
│       │                 │      │
└───────┘                 └──────┘
```

---
## Concepts
View
- representation of what the user sees
- hooks to said interface
- responds to change in state
- no logic!
- no state!

---
## Concepts
```txt
┌───────┐  ┌──────────┐   ┌──────┐
│       │  │          │   │      │
│       │  │          │   │      │
│       │  │          │   │      │
│       ◀──│Controller│◀──┤      │
│       │  │          │   │      │    ┌────┐
│ Model │  │          │   │ View │◀──▶│User│
│       │  │          │   │      │    └────┘
│       │  └──────────┘   │      │
│       │                 │      │
│       ├─────────────────▶      │
│       │                 │      │
└───────┘                 └──────┘
```

---
## Concepts
Model
- holds all state
- representation of data
- no state anywhere else, ever\*
- is modified by controllers
- no logic!

---
## Concepts
```txt
┌───────┐  ┌──────────┐   ┌──────┐
│       │  │          │   │      │
│       │  │          │   │      │
│       │  │          │   │      │
│       ◀──│Controller│◀──┤      │
│       │  │          │   │      │    ┌────┐
│ Model │  │          │   │ View │◀──▶│User│
│       │  │          │   │      │    └────┘
│       │  └──────────┘   │      │
│       │                 │      │
│       ├─────────────────▶      │
│       │                 │      │
└───────┘                 └──────┘
```

---
## Concepts
Controllers
- stateless
- jus' modifies state
- responds to events from view
- no state!

---
## Concepts
```txt
┌───────┐  ┌──────────┐   ┌──────┐
│       │  │          │   │      │
│       │  │          │   │      │
│       │  │          │   │      │
│       ◀──│Controller│◀──┤      │
│       │  │          │   │      │    ┌────┐
│ Model │  │          │   │ View │◀──▶│User│
│       │  │          │   │      │    └────┘
│       │  └──────────┘   │      │
│       │                 │      │
│       ├─────────────────▶      │
│       │                 │      │
└───────┘                 └──────┘
```

---
## Components
- virtual-app
- hyperx
- sheetify
- sheet-router
- xtend
- browserify

---
## Components
[ ~~ demo ~~ ]

---
## Components
Views
- inline styles (like css)
- inline templates (like html)
- bindings to the controllers

---
## Components
```js
function errMain (params, app, state) {
  const prefix = sf`
    span { color: red }
  `

  return hx`
    <button onclick=${app.send({ type: 'increment' })}>
      +${state.mod}
    </button>
  `
}
```

---
## Components
[ note to self: show sheetify v4 README ]

---
## Components
Model
- virtual-app
- xtend

---
## Components
Model
```js
function modifyState (action, state) {
  if (action.type === 'increment') {
    return xtend(state, { count: state.count + 1 })
  }
  if (action.type === 'decrement') {
    return xtend(state, { count: state.count - 1 })
  }
}
```

---
## Stuff it doesn't do
- no animations
- no config-to-code
- not newcomer friendly
- not popular (yet?)

---
## Recap
- there is a parallel universe
- build your own is cool
- unix is hard tho
- it's all about tradeoffs

---
## h('thank.you', '!')
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2015-02-2016-02-melbjs
- npm i -g tslide to view the slides
