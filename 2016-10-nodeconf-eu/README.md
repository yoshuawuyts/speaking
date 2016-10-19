```
┌─────────────────────────┐
│                         │██
│    towards a faster,    │██
│    smaller web          │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-10-19           │██
│                         │██
│   [ epilepsia free ]    │██
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

- Warning ahead: this is a coneptual
  talk. The conclusions posted are
  subjective and not based on science™.
  It's cool if you take my word for things
  but always do your own research

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
- and that's cool, we might need it

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
* free interpretation

---
## The pieces of perf
```
┌──────────────────────────────┐
│    The next billion users    │
└──────────────────────────────┘
```
- mostly running Android
- have decent specs (1GB RAM, quad-core processors)
- have an evergreen browser and WebView (Android 5+)
- no reliable internet connection
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

---
## The pieces of perf
```
┌────────────────────────────────┐
│  What are the pieces of perf?  │
└────────────────────────────────┘
```
- setup
- main loop

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

---
## Why is the web slow?
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

---
## Why is the web slow?
```
┌─────────────────────────┐
│    Remember that the    │
│  speed of light can be  │
│      the bottleneck     │
└─────────────────────────┘
```
- the "L" in "latency" is for "light speed"
- physical distance is important

---
## Why is the web slow?
```
┌───────────────────────┐
│ Network: Bundle sizes │
└───────────────────────┘
```
- complete CSS spec is 20kb
- brotli is gzip compat and 10% smaller
- zopfli is new and 30% smaller
- nobody really changes TCP frame sizes
- HTTP2 is not magic

---
## Why is the web slow?
```
┌────────────────────┐
│ Network: Takeaways │
└────────────────────┘
```
- 1st renderable page should be in 1st eth packet
- CSS + HTML + JS should be under 60kb
- HTTP2 won't save you

---
## Why is the web slow?
```
┌──────────────────────────┐
│ Applications: Boot times │
└──────────────────────────┘
```
- time to boot JS engine is __TODO: benchmark boot time__
- time to boot browserify is __TODO: benchmark browserify boot time__
- all of the above is irrelevant compared to network times

---
## Why is the web slow?
```
┌────────────────────────────────────────┐
│ Applications: Ahead of time evaluation │
└────────────────────────────────────────┘
```
- ahead of time evaluation
- facebook has experimental compiler to inline
- time to boot JS engine is __TODO: benchmark boot time__
- time to boot browserify is __TODO: benchmark browserify boot time__
- all of the above is irrelevant compared to network times

- time to boot of a regular web page
- CPU spikes during booting are bad for battery life
- most sites only use 1/8 cores
- The web is slow, and most humans don't seem to know why

---
## Thanks y'all!
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on:
- https://github.com/yoshuawuyts/talks/2016-10-nodeconf-eu
- npm i -g tslide to view the slides
