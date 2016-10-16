```
┌─────────────────────────┐
│                         │██
│    towards a faster,    │██
│    smaller web          │██
│                         │██
│    Yoshua Wuyts         │██
│    2016-10-19           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```
* epilepsia free
* afaik no obv. triggers

---
## Hello I'm Yosh
- heaps of npm packages
- does JS for a living
- computer opinions
- 🚂🚃🚃🚃🚃🚃🚃
- workin on @dat_project

---
## So what we talkin 'bout today?
- Warning ahead: this is a conceptual
  talk. The conclusions posted are
  subjective and not based on science™.
  It's cool if you take my word for things
  but always do your own research

---
## So what we talkin 'bout today?
┌─────────────────────────┐
│                         │
│     The web is slow,    │
│     and most* humans    │
│    don't seem to know   │
│          why            │
│                         │
└─────────────────────────┘
* "most" means like the majority
  of people I've interacted with.
  Subjective and YMMV

---
## So what we talkin 'bout today?
┌─────────────────────────┐
│                         │
│     The web is slow,    │
│     and most* humans    │
│    don't seem to know   │
│                         │
└─────────────────────────┘
* "most" means like people with
  good computers and fast internet,
  aka a good chunk of devs

---
## So what we talkin' bout today
- what we mean by "slow"
- a bunch of useful numbers
- which things to optimize for
- cool things you can do to make the web faster

---
## The web is slow, you say?
┌─────────────────────────┐
│                         │
│     Google AMP exists   │
│  because Goog couldn't  │
│    get people to write  │
│       fast things*      │
│                         │
└─────────────────────────┘
* or so is their justification
  (paraphrased)

---
## The web is slow, you say?
Google AMP is the new standard
- instantly loaded, across the globe
- "meh" UX but oh wow it's fast
- did we mention it's fast?
- it's fast
- it's also (arguably) evil

---
## The web is slow, you say?
Yup, very much so:
- multi MB bundle sizes not uncommon
- offline support? nah ususually not
- scripts rev up to a 100
- UI thread thrashing (GC et al)

---
## Why is the web slow?
1. time spent on the network
2. time spent booting up
3. amount of tasks performed
4. distribution & priotization of tasks

---
## 
- time to boot of a regular web page
- CPU spikes during booting are bad for battery life
- most sites only use 1/8 cores
- The web is slow, and most humans don't seem to know why

---
## So what we talkin 'bout today?

---
## Shout outs
- Nolawson - great work on offline-first JS
- Patrick Steele Idem - for building morphdom
