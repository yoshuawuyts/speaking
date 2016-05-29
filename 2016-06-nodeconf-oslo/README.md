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
- implicit contracts
- unknown behavior
- unknown relation code - behavior
- complex depency graph (code, not packages)

---
## Server chat
```
┌─────────────────────────┐
│ Reverse engineering is  │
│  the root of all time   │
│       consumption       │
└─────────────────────────┘
```

---
## Server chat
```
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
```
┌────────────────────────────────┐
│ Unless a contract between two  │
│  systems is made explicit, it  │
│        is unenforcable         │
└────────────────────────────────┘
```

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
MsgPack over HTTP (and derivatives)
- binary
- C++
- well supported debugging tools
- dynamic
- kinda small
- non-versioned

---
## Protocols
JSON over HTTP2
- binary
- native to JS (kinda)
- debuggable?
- dynamic
- kinda small
- non-versioned

---
## Protocols
Protobuf over HTTP2
- binary
- C++
- lol, debugging
- 
