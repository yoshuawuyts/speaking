```
┌─────────────────────────┐
│                         │██
│    browserify           │██
│    deep dive            │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-09-06           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Hello I'm Yosh
- tons of npm packages
- does JS for a living
- computer opinions
- 🚂🚃🚃🚃🚃🚃🚃
- not from here™

---
## Browserify deep dive
- yay browserify

---
## Browserify deep dive
- YAY BROWSERIFY

---
## Browserify deep dive
- intro
- internals
- ecosystem
- wraps

---
## Intro
```
┌────────────────────────┐
│                        │
│    Browserify is a     │
│  (modular) javascript  │
│        compiler        │
│                        │
└────────────────────────┘
```

---
## Intro
- modular
- pluggable with transforms and plugins
- compiler because x -> y
- super stable (unless you let me patch stuff)

---
## Internals
- STREAMS EVERYWHERE

---
## Internals
- create AST
- apply local transform
- ueh, apply global transforms?
- register require() calls
- plugins can hook into any step

---
## Internals
Transforms v plugins
- transforms operate on pieces of code
- plugins operate on browserify itself

---
## Ecosystem
```
┌──────────────────────┐
│                      │
│ There's a transform  │
│      for that™       │
│                      │
└──────────────────────┘
```

---
## Ecosystem
E_TOO_MANY_THINGS
- https://github.com/substack/node-browserify/wiki/list-of-transforms

---
## Ecosystem
Optimizing
- uglifyify
- bundle-collapser
- unassertify
- exorcist

---
## Ecosystem
Cool things
- sheetify
- brfs
- bulkify
- watchify

---
## Wraps
Development
- budo
- beefy
- wzrd

---
## Wraps
Optimizing
- bundleify

---
## Wraps
All of the above + deployment
- bankai

---
## Bonus round
Bankai!
- code over configuration
- dev mode for development
- optimize mode for production
- as a node module
- as a CLI tool

---
## browserify thank.js > you.js
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2016-09-nodejs-berlin
- npm i -g tslide to view the slides
