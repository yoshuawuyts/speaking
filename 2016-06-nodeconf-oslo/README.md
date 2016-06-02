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
- mad engineering

---
## A thousand tiny messages
- Let's chat about big systems
- , what makes them complex
- , and how to make them un-complex

---
## A thousand tiny messages
So what's a big system?
- several people working together
- on a bunch of processes that continously
  exchange data
- that may or may not live on the same machine

---
## A thousand tiny messages
Macro scale understanding:
- be aware of all moving parts of a system
- know what they do
- and know how they connect to each other

---
## A thousand tiny messages
Black box programming:
- the interface of a program is known
- implementation details don't leak
- like the good packages in Node
- which reduces cognitive overhead

---
## A thousand tiny messages
Homogenic interfaces:
- the interface is the same regardless of situation
- like plan9 files everywhere
- sometimes less than ideal fit
- but introduces shared terminology
- and moves programs closer to lego

---
## Server chat
```txt
┌──────────────────────────┐
│  Reverse engineering is  │
│   the root of all dev    │
│     time consumption     │
└──────────────────────────┘
```
(More bold statements after the break)

---
## Server chat
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
(We're done with bold statements now)

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
