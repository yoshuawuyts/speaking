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
- demos

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
- no state at all
- modifies state
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
