# anatomy of a modular client
This talk is to introduce people to the idea of a modular, event driven
portable client.

## isomorphicism -> portability
- parity
- does not mean render client === render server
- reuse components, not glue code

## server
- well defined interfaces
- .on for events
  - also: what elements are events?
  - signalling
  - show wayfarer
  - show simple-store
- .pipe for streams
  - just data over time
  - everything that mutates should be a stream
  - heck, even stateful components can be streams

## architecture
- event driven
- one-way data flows
- basically streams
- wrapped up in browserify (see also: isomorphic)

## tools
- provide encapsulation
- web components allow hooking elements into logic

## anatomy of a component
- base-element as a module
- component-specific wrappers
- possible default to webcomponents since it's a standard
- expose internals so wrappers are possible
- mention custom-element

#mk2
## uniform components
- button
- list
- form

## build on top of these abstractions
- infinite scrolling
- button with several states
- dom events
- xhr submission

## work towards specific use cases
- twitter feed
- facebook like button
- login form for your new startup?

## wrapped for any framework you want
- webcomponents
- react
- ember

## tools
- npm = isomorphic code = portable code
- base element that renders both server + client
- shared-abstractions-as-a-module: lowest common denominator

## find the correct abstractions
At fabrique I heard people were looking for stuff that did touch events well.
How do you handle that? What's the correct way of listening to keybindings and
firing events based on that?

Oh, and don't forget to shit on react router for being everything that is wrong
with client side code.

# describe why frameworks are used - so that we know why we're talking about
- frameworks are used so that people have a common set of expectations
- frameworks focus very much on the interface of things (lifecycles, methods, etc)
- frameworks provide a common interface for elements to communicate
- following that reasoning web components are a framework
- ~ bash is a framework
- ~ node's `require()` is a framework
- but that's not bad
