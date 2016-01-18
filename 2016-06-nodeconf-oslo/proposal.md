# tiny messages for big architectures
problem: scaling a monolith is hard
solution: applying scale from the beginning

While making a thing is easy, predicting how it
Upgrading is hard. Creating monoliths is easy. Message queues are good, but
only in the later stages. Message queues are brittle, making them bad for the
early stages. Message queues are stateful, which is bad even in later stages.

Architectural patterns are good. Retries are good. Idempotent messages are
good. Static typing is good -> protobufs are static typing for api's.

-----------------
## For organizers
As a contractor, more often than not I help out with organizations that rely on
HTTP for every layer of their stack; resulting in monoliths that have trouble
getting decoupled. Instead I'll be showing off an alternative model, where
scalability is a first class concern, rather than something that is applied as
a costly afterthought.

I'll point out the problems

## About
I'm a freelance software engineer who's worked on projects across the globe.
Having been an active member in the Node.js community for years
