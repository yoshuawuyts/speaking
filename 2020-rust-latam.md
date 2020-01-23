# CFP Rust Latam

- Title: Designing Tide & Surf
- Tags: intermediate / advanced
- Language: EN (though considering doing ES; native speaker, but never
presented about tech in ES before -- might want to)

## Abstract

Rust is going through a meteoric rise - increasingly underpinning some of the
largest infrastructure deployments in the world. Much of that has to do with
networking, and is considered pretty advanced. But what if we told you that
you too could be writing advanced networking code?

In this talk Yosh will walk you through the design of Tide and Surf, an HTTP
server and client pair. And explain how they work, the decisions that went
into their design, and how they make writing high performance Rust code
accessible to everyone.

## Committee Details

The talk will start stating the importance for Rust to have a web presence,
drawing on numbers from the Rust and StackOverflow surveys. We'll then share
the work we've been doing to solve this: Surf & Tide, a framework pairing of
HTTP server and HTTP client. After a brief introduction we'll cover several
unique features they provide, how they've been made possible by Rust.

The purpose of this talk is to lift the covers on the design process that
goes into building something as complex as a web framework in Rust. Rust's is
a unique language, and sharing the process of something novel might prove to
be insightful for many of aspirational Rust users.

## Committee Pitch

Between 2018-2019 I was the co-lead of the Rust Net WG, which subsequently
became the Rust Async Ecosystem WG. Much of the work we did was research ways
to make asynchronous Rust more accessible to people. And async-std, tide, and
surf are the products of much of the work that happened during that time.

## Why are you excited?

Rust is at a turning point in adoption. Now that we have Rust 2018,
async/await, and well-known production users, we're seeing an shift from
enthusiasts to industry adoption.

There's still a perception that "rust is hard" and especially "async rust is
hard". We're here to show what *could be*. How through careful API design,
documentation, and yielding Rust's strenghts we can actually produce
something that's *easier* than the alternatives.

I don't feel this is a take that many people bring to Rust; but it's such an
important part of what makes the language work. I'd like to share that
perspective with more people, empowering people to realize *they too* can
make these things, and in turn help lower the barrier for everyone else.

## Previous speaking experience

I've spoken at over 40 events in the past 4 years, helped out at workshops,
and run livestreams. Highlights include:

- NodeFest Japan 2016
- NodeConf EU 2017
- RustConf 2019

## Have you presented on this topic before?

I've spoken at-length about JavaScript frameworks in the past. This would be
the first time I present publicly about the work we've done on Tide, Surf,
and our HTTP stack.

## Bio

Yosh is a sofware engineer based in Berlin. He's previously co-led the Rust
Async Ecosystem WG, and is the co-author of the async-std, tide, and surf
crates.
