# pull-stream: the little module that could
Node Streams are pretty cool, but also hard to grok. Between all the events,
types, modes most devs get confused pretty easily. And that's a shame, because
when streams are done right they provide seemless composition and incredible
speed.

What if we could keep the speed and composition, but make the interface
simpler? That's what `pull-stream` is, and in this talk we'll work over how a
tiny package can help you write code that lazily fetches data, provides robust
error handling, frictionless composition and more.

## A little bit more
`pull-stream`s were thought up by Dominic Tarr who contributed majorly to early
streams code. It's an implementation of the Node streams v2/v3 pull paradigm,
optimized for simplicity (26loc!). In this talk we'll go over how Node streams
came to be, the issues Node streams is currently facing and very hands-on
knowledge of how to use `pull-stream` in projects. I'll not make it
complicated, I promise!

## About me
I'm a freelance software engineer who's been an active member of the Node.js
community for the last years. I help maintain [numerous packages][npm], do a
[fair amount of public speaking][talks] and been involved with numerous
[nodeschool][nodeschool] events in multiple cities :herb:

In recent times I've helped profile `pull-stream`, created packages for the
ecosystem and [written about it][medium].

- [twitter](https://twitter.com/yoshuawuyts)
- [github](http://github.com/yoshuawuyts/)
- [email](mailto:yoshuawuyts@gmail.com)

[npm]: https://www.npmjs.com/~yoshuawuyts

---

# the anatomy of a Node server
Modularity is the beating heart of Unix. By creating tiny composable tools,
bigger things can be achieved. Discovering these tools is no trivial task
though. The same is true for Node: if you're building servers without using
frameworks, which problems should you address and which packages should you
use?

Luckily there's a strong community of authors building, and maintaining
packages that work with `require('http')`. In this talk we'll work through the
cream of the crop of what npm has to offer so you too can move away from big
frameworks. And if you know of any packages that better suit your needs - it's
all modular, so anything is replaceable!

## A little bit more
Unix is hard - it's taken me years to feel comfortable in the massive npm
ecosystem. Not everyone is that comfortable with the ecosystem though; in this
talk I want provide the right handles so that anyone can transition into a more
modular architecture which revolves around `require('http')` rather than large,
opinionated frameworks. In the process I'll showcase solutions for common use
cases (domain composition, generic object storage, fail proof error handling,
etc.) and talk about how to build solid server packages.

## About me
I'm a freelance software engineer who's been an active member of the Node.js
community for the last years. I help maintain [numerous packages][npm], do a
[fair amount of public speaking][talks] and been involved with numerous
[nodeschool][nodeschool] events in multiple cities :herb:

I also curate a [big list of packages][packages].

- [twitter](https://twitter.com/yoshuawuyts)
- [github](http://github.com/yoshuawuyts/)
- [email](mailto:yoshuawuyts@gmail.com)

[packages]: https://github.com/yoshuawuyts/knowledge/blob/master/js/packages.md

---

[talks]: https://github.com/yoshuawuyts/talks
[nodeschool]: http://nodeschool.io/
[medium]: https://medium.com/@yoshuawuyts/streams-in-node-ab9f13e15d5
