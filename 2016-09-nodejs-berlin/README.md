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
