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
- mad engineering

---
## A thousand tiny messages
- Let's chat about big systems
- , what makes them complex
- , and how to make them un-complex

---
## What makes systems complex?
So what's a big system?
- several people working together
- on a bunch of processes that continously
  exchange data
- that may or may not live on the same machine

---
## What makes systems complex?
Macro scale understanding:
- be aware of all moving parts of a system
- know what they do
- and know how they connect to each other

---
## What makes systems complex?
Black box programming:
- the interface of a program is known
- implementation details don't leak
- like the good packages in Node
- which reduces cognitive overhead

---
## What makes systems complex?
Homogenic interfaces:
- the interface is the same regardless of situation
- like plan9 files everywhere
- sometimes less than ideal fit
- but introduces shared terminology
- and moves programs closer to lego

---
## What makes systems complex?
- services are getting smaller
- team size / composition morphs
- everything is written in dynamic langs
- technical debt for the sake of progress

---
## What makes systems complex?
```txt
┌─────────────────────────────────┐
│  Everyone knows that debugging  │
│  is twice as hard as writing a  │
│   program in the first place.   │
│                                 │
│  So if you're as clever as you  │
│  can be when you write it, how  │
│     will you ever debug it?     │
└─────────────────────────────────┘
                  - Brian Kernighan
```

---
## What makes systems complex?
```txt
┌──────────────────────────┐
│  Reverse engineering is  │
│   the root of all dev    │
│     time consumption     │
└──────────────────────────┘
```

---
## What is making systems complex?
Ye olde monolith:
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
## What is making systems complex?
Old monolith architecture:
- fast to build
- implicit internal interfaces
- testing logic in isolation is hard
- rough to split up and maintain

---
## Uncomplexify
Shiny monolith:
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
## Uncomplexify
Shiny monolith:
- internal RPC over TCP
- statically typed data through protobufs
- easy to refactor
- easy to split up

---
## Uncomplexify
So how do we combat system complexity?
- define common patterns for connecting systems
- statically typed data between systems
- RPC over TCP\*

---
## Uncomplexify
So what are the patterns to connect our systems?
- RPC (1:1)
- message queue (1:n)
- pubsub (1:n)

---
## Uncomplexify

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
