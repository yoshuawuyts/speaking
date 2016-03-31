# [build] pull-stream: the little module that could
Node Streams are cool, but also hard to grok. Between all the different events,
stream types, and modes, most devs get confused pretty easily. And that's a
shame, because when streams are done right they provide seemless composition
and great performance.

What if we could keep the performance and composition, but make the interface
simpler? That's what `pull-stream` is, and in this talk we'll work over how a
tiny package can help you write code that lazily fetches data, provides robust
error handling and frictionless composition at a fraction of the complexity of
Node streams.

## A little bit more
`pull-stream`s were thought up by Dominic Tarr who contributed majorly to early
streams code. It's an implementation of the Node streams v2/v3 pull paradigm,
optimized for simplicity (26loc!). In this talk we'll go over how Node streams
came to be, the issues Node streams is currently facing and very hands-on
knowledge on how to integrate `pull-stream` in projects.

## About me
I'm a freelance software engineer who's been an active member of the Node.js
community for the last years. I help maintain [numerous packages][npm], do a
[fair amount of public speaking][talks] and have been involved with numerous
[nodeschool][nodeschool] events across the world :herb:

In recent times I've helped optimize `pull-stream`, created packages for the
ecosystem and written about [streams][blog-streams] and
[pull-stream][blog-pull].

- [twitter](https://twitter.com/yoshuawuyts)
- [github](http://github.com/yoshuawuyts/)
- [email](mailto:yoshuawuyts@gmail.com)

[npm]: https://www.npmjs.com/~yoshuawuyts
[blog-streams]: https://github.com/yoshuawuyts/knowledge/blob/master/js/streams.md
[blog-pull]: https://medium.com/@yoshuawuyts/streams-in-node-ab9f13e15d5

---

# [build] the anatomy of a Node server
Modularity is the beating heart of Unix. By creating tiny composable tools,
bigger things can be achieved. Discovering these tools is no trivial task
though. As is the case in Node: if you're building servers without using
frameworks, which packages should you use?

Luckily there's a strong community of authors building, and maintaining
packages that work around the common interface of `require('http')`. In this
talk we'll work through the cream of the crop of what npm has to offer so you
too can move away from big frameworks toward an assortment of packages
optimized for your needs.

## A little bit more
Unix is hard - it takes most people years to feel comfortable in the massive
npm ecosystem. In this talk I want to provide people with the right handles so
they too can transition away from large frameworks with confidence. In the talk
we'll cover solutions for common use cases (domain composition, generic object
storage, fail proof error handling, etc.) and alternative packages built for
different trade-offs.

## About me
I'm a freelance software engineer who's been an active member of the Node.js
community for the last years. I help maintain [numerous packages][npm], do a
[fair amount of public speaking][talks] and have been involved with numerous
[nodeschool][nodeschool] events across the world :herb:

I also curate a [big list of npm packages][packages].

- [twitter](https://twitter.com/yoshuawuyts)
- [github](http://github.com/yoshuawuyts/)
- [email](mailto:yoshuawuyts@gmail.com)

[packages]: https://github.com/yoshuawuyts/knowledge/blob/master/js/packages.md

---

[talks]: https://github.com/yoshuawuyts/talks
[nodeschool]: http://nodeschool.io/
