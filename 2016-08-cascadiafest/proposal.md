### Talk Title
pull-stream: the little module that could

### Description/Abstract
Node Streams are cool, but hard to grok. Between all the different events,
stream types, and modes, most devs get confused pretty easily. And that's a
shame, because when streams are done right they provide seemless composition
and great performance.

What if we could keep the performance and composition, but make the interface
simpler? That's what `pull-stream` does, and in this talk we'll go over how a
tiny package can help you write code that lazily fetches data, provides robust
error handling and frictionless composition at a fraction of the complexity of
Node streams.

### Best Day
Node Day

### Additional Talk Information
Pull streams were thought up by Dominic Tarr who contributed majorly to early
streams code. It's an implementation of the Node streams v2/v3 pull paradigm,
optimized for simplicity (26loc!). In this talk we'll go over how Node streams
came to be, the issues Node streams is currently facing and very hands-on
knowledge on how to integrate `pull-stream` in projects.

I've recently [helped refactor pull-stream][ps-refactor] to make it more
efficient, have written guides on both [node streams][node-blog] and
[pull-stream][ps-blog].

[ps-refactor]: https://github.com/dominictarr/pull-stream/commit/a2add3dd4addfb7ed5cd30977b8dd9bbfbbd86bf
[node-blog]: https://github.com/yoshuawuyts/knowledge/blob/master/js/streams.md
[ps-blog]: https://medium.com/@yoshuawuyts/streams-in-node-ab9f13e15d5

---
### Talk Title
The anatomy of a Node server

### Description/Abstract
Modularity is the beating heart of Unix. By creating tiny composable tools,
bigger things can be achieved. Discovering these tools is no trivial task
though. As is the case in Node: if you're building servers without using
frameworks, which packages should you use?

Luckily there's a strong community of authors building, and maintaining
packages that work around the common interface of `require('http')`. In this
talk we'll cover the aspects that make for a strong Node application and
the packages that will help you achieve that.

### Best Day
Node Day

### Additional Talk Information
The goals of this talk are two-fold: first off I want to provide people with
the right handles so they too can transition away from large frameworks with
confidence. Secondly I want to highlight some of the lesser covered aspects of
servers - such as (strongly typed) RPC, worker queues, discovery and
documentation generation - and show people how this can be done elegantly and
added to existing applications with little cost.

In the past I've lead efforts to optimize one of the largest Node deployments
of Australia, helping them move away from deeply coupled services to light
services that were easy to profile and maintain.

---
### Talk Title
virtual no more

### Description/Abstract
The virtual-dom is everywhere. Originating from the game dev world and
popularized by React, it's greatly impacted frontend development everywhere.
But is it actually any good? In recent times arguments against using
virtual-doms have grown. In this talk Yosh will walk you through the history of
the virtual-dom, the patterns that underpin it and show what lies at the end of
the road of frameworks.

### Best Day
Browser Day

### Additional Talk Information
In the last decade framework popularity started at jQuery, progressed through
Backbone and Angular and arrived at React. Every iteration, everything has
been rebuilt and existing logic has been thrown out with the bath water. It's
not odd some people [express being fatigued][jsf].

Wouldn't it be nice if change was instigated not because we're pressured into
it, but because we choose to? That is exactly what [bel][bae], [yo-yo][yo] and
[morphdom][md] propose we do - by treating DOM nodes as the interface, we can
finally liberate ourselves from frameworks and start creating the components we
want, using the very best practices we've gathered over the years.

I've been an early adopter of React, have a reasonable number of [virtual-dom
components][avd], have been involved with the precursors of `yo-yo`
([base-element][be], [vel][vel]) and have [given talks][vw] about `virtual-dom`
in the past.

To my knowledge no prior talks about `yo-yo` and `bel` have been given at
conferences before.

[avd]: https://github.com/sethvincent/awesome-virtual-dom
[vw]: https://github.com/yoshuawuyts/talks/blob/master/2016-02-melbjs/README.md
[be]: https://github.com/shama/base-element
[bae]: https://github.com/shama/bel
[vel]: https://github.com/yoshuawuyts/vel
[md]: https://github.com/patrick-steele-idem/morphdom
[yo]: https://github.com/maxogden/yo-yo
[jsf]: https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4
[hx]: https://github.com/substack/hyperx
