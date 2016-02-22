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
- Informal contracts are the worst
- JSON is pretty bad for RPC
- Good design saves time refactoring
- Ship things, test, refactor

---
## Shiny monolith
```
  ┌───────────────────────────────┐
  │            Client             │
  └────────┬────────────▲─────────┘
─ ─ ─ ─ ─ ─│─ ─ ─ ─ ─ ─ ┼ ─ ─ ─ ─ ─ ─
  ┌────────▼────────────┴─────────┐
  │          Public API           │
  └──┬───▲─────┬────▲──────┬───▲──┘
     │   │     │    │      │   │
  ┌──▼───┴──┐┌─▼────┴──┐┌──▼───┴──┐
  │ Service ││ Service ││ Service │
  └─────────┘└─────────┘└─────────┘
```

---
## Shiny monolith
- internal RPC over TCP / Unix sockets
- statically typed data through protobufs
- easy to refactor
- easy to split up
- aka how all the huge corps do it

---
## Shiny monolith

---
## message Thank { required string You = 1; }
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

- http://zguide.zeromq.org/page:all
- https://github.com/mafintosh/pbs
- https://github.com/nickdesaulniers/node-nanomsg

Slides available on
- https://github.com/yoshuawuyts/talks/2015-02-2016-02-melbjs
- npm i -g tslide to view the slides
