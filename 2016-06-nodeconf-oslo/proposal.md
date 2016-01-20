# tiny messages for big architectures
Imagine a world where upgrading applications is easy; where there are no gaps
between the application that serves your first few users to the system that
powers a million.

Using `nanomsg`'s scalability protocols this becomes reality. In his talk Yosh
will explain the philosophy of `nanomsg` and the patterns to reliably architect
software that scales.

-----------------
## A little bit more
Often applications are architected as monoliths which are broken down once
performance problems become visible. Applying architecture after the fact is
often costly, and not always successful.

In this talk I want to show the audience a different approach to architecture,
relying on POSIX compliant sockets for inter- and in-process communication that
can later safely be expanded between machines. Using patterns and practices
(emphasis on idempotency) to scale, rather than maintaining a brittle message
queue. The idea is to provide the audience with a good grasp of where `nanomsg`
and friends fit into architecture, and give them the right tools to start

##

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
