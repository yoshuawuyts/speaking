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
- protobufs
- nanomsg
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
- internal RPC over TCP or Unix sockets
- statically typed data through protobufs
- easy to refactor
- easy to split up

---
## Protobufs
- way of encoding data
- versioned
- statically typed
- fast
- small
- supports binary

---
## Protobufs
```proto
message Company {
  required string name = 1;
  repeated Employee employees = 2;
  optional string country = 3;

  message Employee {
    required string name = 1;
    required uint32 age = 2;
  }
}
```

---
## Protobufs
```js
const pbs = require('pbs')
const fs = require('fs')

const buf = fs.readFileSync(__dirname + 'company.proto')
const messages = pbs(proto)

const encoder = messages.Company.encode()
const decoder = messages.Company.decode()
```

---
## Nanomsg
- way of transporting data
- different scalability strategies
- TCP / Unix socket / Websocket
- complexity in patterns, not code
- C lib - bindings to any lang

---
## Nanomsg
Client
```js
const nano = require('nanomsg')

const sub = nano.socket('sub')
const addr = 'tcp://127.0.0.1:7789'
sub.connect(addr)

sub.pipe(process.stdout)
```

---
## Nanomsg
Server
```js
const nano = require('nanomsg')

const pub = nano.socket('pub')
const addr = 'tcp://127.0.0.1:7789'
pub.bind(addr)

pub.send('Hello from nanomsg')
```

---
## Scalability patterns
All relationships ever:
- one to one
- many to one
- one to many

---
## Scalability patterns
- pair (1:1)
- req-res (n:1)
- pub-sub (1:n)
- pipeline (1:n:1)
- bus (n:n)

---
## Scalability patterns

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
