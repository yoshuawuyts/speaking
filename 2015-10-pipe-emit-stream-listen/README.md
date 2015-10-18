```
┌─────────────────────────┐
│                         │██
│    pipe, emit,          │██
│    stream, listen       │██
│                         │██
│    Yoshua Wuyts         │██
│    2015-10-18           │██
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

---

## How to learn streams?
- star all of @mafintosh's modules
- write an article on how to use streams
- write a bunch of stream modules
- give a talk on streams

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

## Modules
Event handling is cumbersome, modules make it better
```js
// lets do a simple file copy
var fs = require('fs')

var read = fs.createReadStream('./original.zip')
var write = fs.createWriteStream('./copy.zip')

// use pump instead of read.pipe(write)
pump(read, write, function (err) {
  if (err) return console.error('Copy error!', err)
  console.log('Copied successfully')
})
```
