```
┌─────────────────────────┐
│                         │██
│    towards a faster,    │██
│    smaller web          │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-10-19           │██
│                         │██
│   [ epilepsia proof ]   │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Hello I'm Yosh

- heaps of npm packages
- computer opinions
- 🚂🚃🚃🚃🚃🚃🚃
- workin on @dat_project
- not a morning person

---
## So what we talkin 'bout today?

- the web anno now
- the pieces of perf
- speeding it up

---
## So what we talkin 'bout today?

- Warning ahead: The conclusions posted are
  subjective and not exact science™. It's
  cool if you take my word for things but
  always do your own research

---
```
┌─────────────────────────┐
│                         │██
│    The web anno now     │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## The web anno now

This month in the web (10/2016):
```
Item   | Avg Size | Avg call count
──────────────────────────────────
HTML   |     53kB |       10 calls
CSS    |     76kB |        7 calls
JS     |    410kB |       23 calls
Fonts  |     85kB |        3 calls
Images |   1650kB |       57 calls
Total  |   2552kB |      107 calls
──────────────────────────────────
```
- [ source: http://httparchive.org/trends.php ]

---
## The web anno now

This month in the web (10/2016):
```
Item                | site %
────────────────────────────
HTML hosted on CDN  |    20%
HTTPS enabled       |    34%
Using compression   |    75%
Using custom fonts  |    64%
Cacheable resources |    47%
────────────────────────────
```
- [ source: http://httparchive.org/trends.php ]

---
## The web anno now

This month in the web (10/2016):
```
┌─────────────────────────┐
│    37 TCP connections   │
│        on average       │
└─────────────────────────┘
```

---
## The web anno now

CSS of popular sites per 10/2016:
```
Site     | Size  | Rules | Selectors
────────────────────────────────────
Github   | 647kB |  8153 |      9215
Twitter  | 643kB |  6990 |      9542
Medium   | 629kB |  3470 |      4484
Facebook | 173kB |  2313 |      2875
Tachyons |  71kB |  1810 |      1994
Basscss  |  14kB |   287 |       347
────────────────────────────────────
```
- [ source: cssstats.com ]

---
## The web anno now
```
┌─────────────────────────┐
│                         │
│  The total size of the  │
│  CSS language is about  │
│          20kB           │
│                         │
└─────────────────────────┘
```
- [ Source: Adam Morse - Things I’ve Learned About CSS ]

---
## The web anno now
```
┌──────────────────┐
│    Google AMP    │
└──────────────────┘
```
- instantly loaded, across the globe
- "meh" UX but oh wow it's fast
- also very much evil (!)
- and that's cool, we probably need it

---
## The web anno now
```
┌─────────────────────────┐
│                         │
│    Google AMP exists    │
│  because Goog couldn't  │
│    get people to write  │
│       fast things*      │
│                         │
└─────────────────────────┘
```
* free interpretation of interactions
  with humans that work on AMP

---
```
┌─────────────────────────┐
│                         │██
│   The pieces of perf    │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## The pieces of perf
```
┌──────────────────────────────┐
│    The next billion users    │
└──────────────────────────────┘

- mostly running Android
- have decent specs (1GB RAM, quad-core processors)
- have an evergreen browser and WebView (Android 5+)
- no reliable internet connection
```
- [ source: nolanlawson.com ]

---
## The pieces of perf
```
┌────────────────────────────────┐
│  What are the pieces of perf?  │
└────────────────────────────────┘
```
1. time spent on the network
2. time spent booting up
3. amount of tasks performed
4. distribution & priotization of tasks
5. perception of the processes above

---
## The pieces of perf
```
┌────────────────────────────────┐
│  What are the pieces of perf   │
│    on a per-resource basis?    │
└────────────────────────────────┘
```
1. time spent on the network
2. time spent interpreting
3. time spent executing

---
## The pieces of perf
```
┌────────────────────────────────┐
│  What are the pieces of perf?  │
└────────────────────────────────┘
```
- setup
- main loop
- perceived perf

---
## The pieces of perf
```
┌────────────────────────────────┐
│  What are the pieces of perf?  │
└────────────────────────────────┘
```
- setup
  - network latency
  - asset size
  - caching
- main loop
  - operation count
  - parallelism
  - task distribution
- perceived perf
  - design
  - psychological trickery

---
## The pieces of perf
```
┌────────────────────────────┐
│ Setup/network: Key Metrics │
└────────────────────────────┘

Item               |  Value
───────────────────────────
Speed of light     | 3x10^8
Ethernet packet    |    1kb
First TCP segment  |    4kb
TCP frame data cap |   60kb
```
- [ source: lots of googling ]

---
```
┌─────────────────────────┐
│                         │██
│     Speeding it up      │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Speeding it up
```
┌────────────────────────────┐
│        Setup/caching       │
└────────────────────────────┘
```
- Content Distribution Networks!!
- put servers close to users
- web 3.0 P2P apps will be 🆒
- leverage browser caching (IDB, SvcWrk.)

---
## Speeding it up
```
┌────────────────────────────┐
|    Setup/assets: Styling   │
└────────────────────────────┘
```
- use new wave OOCSS (e.g. tachyons)
- don't use custom fonts (e.g. 50kb / 3 req)
- remember CSS, the language™ is 20kB
- interpreting old, boring CSS is fast

---
## Speeding it up
```
┌────────────────────────────┐
|    Setup/assets: Images    │
└────────────────────────────┘
```
1. don't use images
2. ??? (not my domain)

---
## Speeding it up
```
┌─────────────────────────────┐
│    Setup/network: Bundles   │
└─────────────────────────────┘
```
- complete CSS spec is 20kb
- zopfli is DEFLATE compat and ~10% smaller
- brotli is new, ok supported and ~30% smaller
- IE8+ targets have viable 5kb frameworks now
- don't bundle in node core modules

---
## Speeding it up
```
┌─────────────────────────────┐
│  Setup/network: Takewaways  │
└─────────────────────────────┘
```
- aim to render ASAP (1st packet perhaps?)
- CSS/HTML/JS should be under 60kb (TCP cap)
- HTTP2 provides header encoding
- bandwidth and latency restraints always apply
- hitting the network is a last resort

---
## Speeding it up
```
┌─────────────────────────────┐
│       Setup: Javascript     │
└─────────────────────────────┘
```
- network
- interpreting
- execution (but we can minimize this)

---
## Speeding it up
```
┌─────────────────────────────┐
│       Setup: Javascript     │
└─────────────────────────────┘
```
```js
// boring.js
var foo = 3 + 2

// with static-eval magic
var foo = 5
```

---
## Speeding it up
```
┌─────────────────────────────┐
│       Setup: Javascript     │
└─────────────────────────────┘
```
- requires manual tailoring
- it's basically macros
- I wish we had macros
- Babel team has done work for generic solution

---
## Speeding it up
```
┌──────────────────────────────┐
│  Main loop: Operation count  │
└──────────────────────────────┘
```
- Garbage Collection pauses 😰
- GC pauses 😰
- GC 😰

---
## Speeding it up
```
┌──────────────────────────────┐
│  Main loop: Operation count  │
└──────────────────────────────┘
```
- mutable > immutable
- creating new Objects is expensive (!!!)
- less operations is better
- ES3 has quite predictable perf results
- boring code is probably fast code

---
## Speeding it up
```
┌──────────────────────────────┐
│    Main loop: Parallelism    │
└──────────────────────────────┘
```
- an average phone has 6-8 cores
- JS by default uses 1 thread on 1 core
- 60fps can be hard

---
## Speeding it up
```
┌──────────────────────────────┐
│    Main loop: Parallelism    │
└──────────────────────────────┘
```
- offload work from the UI thread
- use all the cores
- not all objects can cross thread boundries
- pretty experimental stuff, still
- don't forget about the battery

---
## Speeding it up
```
┌──────────────────────────────┐
│       Main loop: Others      │
└──────────────────────────────┘
```
- RequestAnimationFrame is amazing
- debounce is like RAF but localized

---
```
┌─────────────────────────┐
│                         │██
│         Summary         │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---
## Summary

- sites are pretty big today
- we can make radical optimizations
- hard constraints exist
- almost every step can be optimized
- GC pauses 😰

---
## Thanks y'all!

- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on:
- https://github.com/yoshuawuyts/talks/2016-10-nodeconf-eu
- npm i -g tslide to view the slides
