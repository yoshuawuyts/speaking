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
- demo time

---
## Ye olde monolith
```txt
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
```txt
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
- ~10Mb/s throughput for Node

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
Sync pub-sub
```txt
 ┌───────────┐
 │ Publisher │
 ├─────┬─────┤
 │ REP │ PUB │
 └▲──┬─┴──┬──┘
  1  2    3
 ┌┴──▼─┬──▼──┐
 │ REQ │ SUB │
 ├─────┴─────┤
 │Subscriber │
 └───────────┘
```

---
## Scalability patterns
Required reading(!)
- http://zguide.zeromq.org/page:all

---
## Demo time
[ demo time ]

---
## message Thank { required string You = 1; }
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

- zguide.zeromq.org/page:all
- github.com/mafintosh/pbs
- github.com/nickdesaulniers/node-nanomsg

Slides available on
- github.com/yoshuawuyts/talks/2016-02-melb-nodejs
- npm i -g tslide to view the slides
