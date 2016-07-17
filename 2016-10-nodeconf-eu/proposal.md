# itty bitty websites
What if we could make sites that render fast on any machine; pushing the
boundries of what's theoretically possible in browsers? What do fast websites
look like under the hood? And how can we as an industry move towards a fast,
smaller web that is ready for the protocols of tomorrow? This talk will discuss
how to build fast websites by orchestrating Unix, Node and the browser to work
in perfect harmony.

## Goals
The goal of the presentation is for people to understand what makes websites
fast, and how to apply that knowledge for their own production stacks. It'd be
cool if people could walk away from the presentation knowing:
- roughly how the browser TCP / HTTP network stack works
- roughly how the different stages of browser rendering work
- how caching works
- how to make node serve assets as fast as possible
- key network numbers for which to optimize (packet sizes, frames, etc)
- how to inspect their own payloads
- which Node tools to use to optimize their own payloads

## Bonus goals
- show off how to compile these sites for delivery over traditionally
  slow, but interesting protocols (e.g. IPFS, noscript Tor)
- go over some strategies to speed up JS
- provide an overview of popular packages that don't perform well and show off
  alternatives that might be a better fit

## About
Yosh is a creative engineer who loves all things computer. He's been an active
member of the Node community for years and specializes in building tiny tools
that achieve big things.
