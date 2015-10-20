```
┌─────────────────────────┐
│                         │██
│    pipe, emit,          │██
│    stream, listen       │██
│                         │██
│    Yoshua Wuyts         │██
│    2015-10-22           │██
│                         │██
└─────────────────────────┘██
  ███████████████████████████
```

---

## Hello, I'm Yosh
- interfaces
- unix
- node
- consulting

---

## How to learn streams?
- star all of @mafintosh's modules
- write an article on how to use streams
- write a bunch of stream modules
- include streams training in consulting offer
- give a talk on streams

---

## Streams in 20 mins
- why streams?
- how do streams work?
- modules
- cool things

---

## Why streams?
- _extremely_ fast
- composable
- clear purpose
- neat syntax
- based on events (observables!)

---

## Basics
4 types of streams
- read: data can be read from
- write: data can be written to
- duplex: data can be read from and written to
- transform: data can be written to,
  transformed and then read from

---

## Basics
2 stream modes
- default: operate on buffers and strings
- objectMode: operate on anything

---

## Basics
Streams originate from the unix shell
```sh
$ cat ./my-file > ./other-file
```
```js
const fs = require('fs')

fs.createReadStream('./my-file')
  .pipe(fs.createWriteStream('./other-file'))
```

---

## Basics
Streams use events under the hood
```js
const stream = require('readable-stream')

// primitive .pipe()
const stream1 = new stream.PassThrough()
const stream2 = new stream.PassThrough()

stream1.on('readable', () => {
  stream1.on('data', (data) => stream2.write(data))
  stream1.on('end', () => stream2.end())
})
```

---

## Basics
Read -> transform -> write
```sh
$ cat ./my-file | grep 'foo'
```
```js
const through = require('through2')
const fs = require('fs')

const rs = fs.createReadStream('./my-file')
const ts = grep(/foo/)
const ws = process.stdout
rs.pipe(ts).pipe(ws)

function grep (regex) {
  return through((chunk, enc, cb) => {
    if (regex.test(chunk.toString())) this.push(chunk)
    cb()
  })
}
```

---

## Async
Deferred streams (performant promise alternative)
```js
const stream = require('stream')
const fs = require('fs')

function myAsyncFn () {
  const pts = new stream.PassThrough()

  process.nextTick(function () {
    const rs = fs.createReadStream('foobar.jpg')
    rs.pipe(pts)
  })

  return pts
}
```

---

## Modules
Event handling is cumbersome, modules make it better
```js
// lets do a simple file copy
const fs = require('fs')

const rs = fs.createReadStream('./original.txt')
const ws = fs.createWriteStream('./copy.txt')

// use pump instead of rs.pipe(ws)
pump(rs, ws, function (err) {
  if (err) return console.error('Copy error!', err)
  console.log('Copied successfully')
})
```

---

## Modules
HTTP servers! Write a file to the client
```js
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/css')
  fs.createReadStream('./my-css').pipe(res)
}).listen()
```

---

## Modules
Databases! Scan a full db on each request
```js
const level = require('level')
const http = require('http')

const db = level('/tmp/demo-db')

http.createServer((req, res) => {
  db.createReadStream().pipe(res)
}).listen()
```

---

## Modules
HTML templates!
```js
const hyperstream = require('hyperstream')
const http = require('http')

http.createServer((req, res) => {
  const rs = fs.createReadStream('./index.html')
  const ts = hyperstream({
    body: { _append: '<h1>Hello World</h1>' }
  })
  rs.pipe(ts).pipe(res)
}).listen()
```

---

## Modules
Torrents!
```js
const torrentStream = require('torrent-stream')
const path = require('path')
const fs = require('fs')

const engine = torrentStream('magnet:my-magnet-link')

engine.on('ready', () => engine.files.forEach(file => {
  const outFile = path.join(__dirname, file.name)
  const rs = file.createReadStream()
  const ws = fs.createWriteStream(outFile)
  rs.pipe(ws)
}))
```

---

## Modules
And much much more!
- tar-stream (zip / tar)
- ssejson (server sent events)
- pbs (protocol buffers)
- response-stream (http)
- tape (tests)
- airswarm (local mesh networking)

---

## Recap
- 4 types of streams
- communicate using events
- everything-as-a-stream
- userland makes streams nice
- there's a (stream) package for that

---

## Thank.pipe(you)!
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on
- https://github.com/yoshuawuyts/talks/2015-10-
- npm i -g tslide to view the slides
