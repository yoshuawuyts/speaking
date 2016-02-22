```
┌─────────────────────────┐
│                         │██
│    a thousand tiny      │██
│    messages             │██
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
## Building a distributed system
- ye olde monolith architecture
- shiny monolith architecture
- scalability patterns
- cute lil hacks

---
## Ye olde monolith
```
  ┌─────────────────────────────┐
  │           Client            │
  └────────┬────────────▲───────┘
─ ─ ─ ─ ─ ─│─ ─ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ─
  ┌────────▼────────────┴───────┐
  │           JS blob           │
  └────────┬────────────▲───────┘
           │            │
  ┌────────▼────────────┴───────┐
  │             DB              │
  └─────────────────────────────┘
```

---
## Ye olde monolith
- works pretty well for small things
- fast to build
- internals are loosely defined
- integration tests are easy
- testing logic in isolation is hard
- pretty rough to maintain (in JS)
- pretty rough to split up (in JS)

---
## Shiny monolith
- Good design saves time refactoring
- Ship things, test, refactor
- Informal contracts are the worst

---
