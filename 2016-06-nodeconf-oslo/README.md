```
┌─────────────────────────┐
│                         │██
│    A thousand tiny      │██
│    messages             │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-06-05           │██
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
## A thousand tiny messages
- Let's chat about developing in general
- , about servers
- , about protocols
- , patterns
- and some key takeaways for production

---
## Server chat
- Centralized distributed systems
- Better right-now tech

---
## Server chat
- But first... story time!
- (that one airplane story)

---
## Server chat
So what makes our systems inflexible?
- languages themselves
- implicit contracts
- unknown effects
- unknown causality of effects
- complex depency graph (code, not packages)

---
## Server chat
Tradeoffs
- iteration vs robustness
- iteration vs performance
- iteration vs clarity

---
## Server chat
```txt
┌─────────────────────────┐
│ Reverse engineering is  │
│  the root of all time   │
│       consumption       │
└─────────────────────────┘
```

---
## Server chat
```txt
┌───────────────────────────────┐
│ Everyone knows that debugging │
│ is twice as hard as writing a │
│  program in the first place.  │
│ So if you're as clever as you │
│ can be when you write it, how │
│    will you ever debug it?    │
└───────────────────────────────┘
              - Brian Kernighan
```

---
## Server chat
Which basically all boils down to:
- How are developers allocating their time?
- And how can we thus optimize for value?

---
## Protocols
```txt
┌────────────────────────────────┐
│ Unless a contract between two  │
│  systems is made explicit, it  │
│        is unenforcable         │
└────────────────────────────────┘
```

---
## Protocols
Black box programming:
- only the interface of a system is known
- consumers don't care about the implementation

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
- implicit internal interfaces
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
## Patterns
So how do we connect our systems?
- RPC (1:1)
- message queue (1:n)
- pubsub (1:n)

---
## Protocols
JSON over HTTP
- human-readable
- native to JS
- very debuggable
- dynamic
- kinda big
- non-versioned

---
## Protocols
Protobuf (and derivatives) over HTTP2
- binary
- C++
- lol, debugging
- static(!)
- oh yeah it's small alright
- versioned(!)

---
## Protocols
```protobuf
enum FOO {
  BAR = 1;
}

message Test {
  required float num  = 1;
  required string payload = 2;
}

message AnotherOne {
  repeated FOO list = 1;
}
```

---
## Production
RPC Server
```js
const http = require('http')
const pump = require('pump')
const pbs = require('pbs')
const fs = require('fs')

const schema = pbs(fs.readFileSync('./schema.proto'))
const decoder = schema.Test.decoder((msg) => console.log(`message: ${msg}`))

http.createServer(function (req, res) {
  pump(req, decoder, function (err) {
    res.end()
  })
}).listen(8080)
```

---
## Production
RPC Client
```js
const http = require('http')
const pump = require('pump')
const pbs = require('pbs')
const fs = require('fs')

const schema = pbs(fs.readFileSync('./schema.proto'))
const encoder = schema.Test.encoder()

const msg = encoder({ num: 2, payload: 'hey there' })
const req = http.request('http://localhost:8080', function (err, res) {
  console.log(`statusCode: ${res.statusCode}`)
})
pump(msg, req)
```

---
## Protocols
gRPC over HTTP2
- like protobuf over HTTP2
- custom status codes
- helper methods
- boilerplate generation
- it's what Google does™

---
## Production
```txt
┌───────────────────────────┐
│ Use git AND semantically  │
│     version schemas       │
└───────────────────────────┘
```

---
## message Thank { required string You = 1; }
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

- zguide.zeromq.org/page:all
- github.com/mafintosh/pbs

Slides available on
- github.com/yoshuawuyts/talks/2016-06-nodeconf-oslo
- npm i -g tslide to view the slides
