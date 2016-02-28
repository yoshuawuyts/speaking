```
┌─────────────────────────┐
│                         │██
│    modular stylesheets  │██
│    with sheetify        │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-02-25           │██
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
## Sheetify
Today in practical sheetify:
- design goals
- lil overview
- problem showcase
- sheetify vs x

---
## Design goals
What is CSS even?
- dedicated language
- set properties on nodes
- declarative
- "system" in ECS

---
## Design goals
- leverage npm for stylesheets
- don't break the CSS spec
- simplify OOCSS
- extend through plugins
- flexible but not complex
- a bit of overloading is OK

---
## Lil overview
```js
const prefix = sf`
  h1 { text-align: center; }
`
const tree = hx`
  <section className=${prefix}>
    <h1>My beautiful, centered title</h1>
  </section>
`
```

---
## Demos
- Q: How do I style host elements?
- A: [demo 1]

---
## Demos
- Q: How do I reuse styles from npm?
- A: [demo 2]

---
## Demos
- Q: How do I define global styles?
- A: [demo 3]

---
## Demos
- Q: How can I publish default styles to npm?
- A: [demo 4]

---
## Sheetify vs SASS
- whole different language
- compiled output is quite big
- gap between components and styles
- no npm support

---
## Sheetify vs css-modules
- external files vs inline
- both use namespaces
- both based on PostCSS
- introduces new syntax
- slightly different philosophy

---
## Sheetify vs jcss
- both inline
- objects vs CSS
- webpack-focused
- sets properties on elements

---
## Recap
- quick inline styles
- externalizes to file or stream
- quite flexible
- plays ball with npm

---
## .thank { content: 'you'; }
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

- github.com/sheetify/sheetify

Slides available on
- github.com/yoshuawuyts/talks/2016-03-melbcss
- npm i -g tslide to view the slides
