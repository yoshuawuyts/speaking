```
┌─────────────────────────┐
│                         │██
│    What is node?        │██
│                         │██
│    Yoshua Wuyts         │██
│    James Richardson     │██
│    2015-10-28           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---

## Node.js in 5

- What is this Node thing?
- What are packages?
- Cool things

---

## What is Node?

- JS without a browser!
- Super tiny core library
- Filesystem
- Network glue

---

## What is Node?

Good old JavaScript
```js
console.log('hello world!')
// => 'hello world'
```

---

## What is Node?

Access to the filesystem:

```sh
$ cat ./README.md
```

---

## What is Node?

Access to the filesystem:

```js
const fs = require('fs')
fs.createReadStream('./README.md')
  .pipe(process.stdout)
```

---

## What is Node?

With network support:

```sh
$ curl google.com
```

---

## What is Node?

Requesting files from a server:

```js
const http = require('http')
http.get('http://google.com', res => {
  res.pipe(process.stdout)
})
```

---

## What is Node?

Or serving files:

```js
const http = require('http')
http.createServer((req, res) => {
  res.end('hello world!')
}).listen(8080)
```

---

## What is Node?

Tiny, but complete stdlib:

- crypto
- cluster
- dgram (UDP)
- readline

---

## What are packages?

Packages are tiny snippets of code
that you can install for free.

---

## What are packages?

```sh
$ npm install noop2
```

---

## What are packages?

```js
const noop = require('noop2')
noop()
// ... it was not very effective
```

---

## Or something more interesting

```js
const level = require('level')
const http = require('http')

const db = level('/tmp/demo-db')

http.createServer((req, res) => {
  db.createReadStream().pipe(res)
}).listen()
```

---

## Recap

- node is super tiny
- let's you access filesystem, network
- there's a module for that™

---

## Thank you!

Come to the meetup next Thursday!

