## Goal of the talk
We want to highlight the importance of statically defined data structures. It
allows for code generation, but also provides us with the much-valued black-box
analogy where we only have to care about interfaces.

Patterns introduce well-defined constraints for applications. Zeromq / nanomsg
introduced the concept of scalability patterns, which provide a set of common
terminology to view the world through. By using the abstractions they
introduce, it becomes possible to separate concerns in a distributed system,
providing a system that can be understood on a macro scale.

##
1. Loosely typed data and inter-system relations don't provide macro scale
   understanding for development teams - it encites reverse engineering on all
   fronts, and introduces high overhead for teams.
2. We're at the point where Node's getting into large production systems, with
  bigger and bigger teams and lots of micro services - massively relying on
  JSON / HTTP. Scaling is an afterthought, not something
  and often introducing scale as an afterthought, not as an initial
  design concern
3. Integration at the flick of a switch; scale by default; interfaces work as
   guarantees and can be tested against; rearchitecting and refactoring without
   any hurdles
4. Upfront complexity results in loss of speed; 

## Sections
1. name the enemy
2. answer "why now?"
3. show the promised land before explaining how you'll get there
4. Identify obstacles—then explain how you’ll overcome them
5. Present evidence that you’re not just blowing hot air

## Overview
- development in general
- patterns
- protocols
- and how to apply this stuff for production
