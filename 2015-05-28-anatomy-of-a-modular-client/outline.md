# anatomy of a modular client
This talk is to introduce people to the idea of a modular, event driven
isomorphic client.

## isomorphicism
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
