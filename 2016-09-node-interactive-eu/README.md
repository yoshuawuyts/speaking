```
┌─────────────────────────┐
│                         │██
│    browserify           │██
│    deep dive            │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-09-16           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Hello I'm Yosh
- heaps of npm packages
- does JS for a living
- computer opinions
- 🚂🚃🚃🚃🚃🚃🚃
- artisenal local human

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
```txt
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
But why talk about compilers?

---
## Intro
```txt
┌────────────────────────────┐
│                            │
│ WE WILL KEEP COMPILING OUR │
│        CODE FOREVER        │
│           (yay!)           │
│                            │
└────────────────────────────┘
```

---
## Intro
```txt
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
## Intro
```sh
$ browserify index.js > bundle.js
```

---
## Intro
```js
const browserify = require('browserify')
browserify('./index.js')
  .bundle()
  .pipe(process.stdout)
```

---
## Demo time
[ browserify vanilla demo ]

---
## Internals
- STREAMS EVERYWHERE

---
## Internals
- create AST
- apply local transform
- apply global transforms
- register require() calls
- plugins can hook into any step

---
## Internals
Registering a plugin into the pipeline
```js
// run before the "label" step in browserify pipeline
bundle.pipeline
  .get('label')
  .unshift(extractStream)
```

---
## Internals
Transforms v plugins
- transforms operate on pieces of code
- plugins operate on browserify itself

---
## Ecosystem
```txt
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
- css-extract

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
## Demo time
[ bankai demo ]
(start and build)

---
## Bonus round
Bankai!
- code over configuration
- dev mode for development
- optimize mode for production
- as a node module
- as a CLI tool

---
## $ browserify thank.js > you.js
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2016-09-16-node-interactive-eu
- npm i -g tslide to view the slides
