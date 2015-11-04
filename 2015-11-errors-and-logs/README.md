```
┌─────────────────────────┐
│                         │██
│    Logging and error    │██
│    handling in Node.js  │██
│                         │██
│    Yoshua Wuyts         │██
│    2015-11-05           │██
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

## Logging & error handling in 30 mins
- How do Errors work in Node?
- Error handling patterns
- Healthy logging practices
- {Unix,Node} tools
- Gotchas

---

## Logging & error handling in 30 mins
1. Error occurs
2. Create error object
3. Format error into log line
4. Process logs on system
5. Packages

---

## 1. Errors
Error causes
- request errors
- validation errors
- permission errors
- syntax errors
- sync / async

---

## 1. Errors
2 types of errors
- expected (user) errors
- unexpected (programmer) errors

---

## 1. Errors
- expected errors are handled gracefully
- unexpected errors kill the process

---

## 1. Errors
Note on try .. catch
- does not work on async
- only use on expected errors
- don't wrap every function in it
- don't use promises
- use cluster to prevent downtime
- or try async_wrap for unexpected errors

---

## 2. Creating errors
- Class:Error
- global
- exist in both Node & browser
- errors were made for throwin'
- .stack contains stack trace
- .message contains message
- don't use strings, use Error

---

## 2. Creating errors
Creating a new error:
```js
const err = new Error('oh my, something went wrong')
console.log(err.stack)
console.log(err.message)
err.foo = 'bar'
throw err
```

---

## 2. Creating errors
Demo 1

---

## 2. Creating errors
Expected errors:
```js
const value = { foo: 'bar' }
validate(value, function (err, res) {
  if (err) return console.error(err)
  console.log(res)
})

// (obj, fn(err?, val?)) -> null
function validate (obj, cb) {
  if (!obj.baz) {
    const err = new Error('No baz property')
    return cb(err)
  }
  cb(null, 'success!')
}
```

---

## 2. Creating errors
Demo 2

---

## 2. Creating errors
Unexpected error. Thrashes process
```js
const assert = require('assert')

const squared = square('definitely not a number')

function square (num) {
  // compare and throw if false
  assert.equal(typeof num, 'number', 'num is number')
  return num * num
}
```

---

## 2. Creating errors
Demo 3

---

## 3. Get errors into logs
Logs need a log format:
- convenient for JS
- contain timestamp
- contain pid
- contain all other information

---

## 3. Get errors into logs
NDJSON: Newline Delimited JSON (ndjson.org)

1. Line separator is '\n'
2. Each line is a valid JSON value

```js
console.log(JSON.stringify({ foo: 'bar' }) + '\n')
```

---

## 3. Get errors into logs
`bole` logger:
- decentralized
- single global config
- streaming
- tiny api surface
- large ecosystem

---

## 3. Get errors into logs
Logging expected errors:
```js
const bole = require('bole')
bole.output({ level: 'info', stream: process.stdout })

const log = bole('mymodule')
log.info('hello')
log.error(new Error('world'))
```

---

## 3. Get errors into logs
Log output:
```txt
$ node index.js
{"time":"2014-05-18T23:47:06.545Z","hostname":"tweedy","pid":27374,"level":"info","name":"mymodule","message":"hello"}
{"time":"2014-05-18T23:47:06.545Z","hostname":"tweedy","pid":27374,"level":"info","name":"mymodule", "err": { "message": "world", "stack": (...)}}
```

---

## 3. Get errors into logs
Logging unexpected errors:
```js
const bole = require('bole')
const log = bole()
process.on('uncaughtException', function (err) {
  log.error(err)
  throw err
})
```

---

## 4. Process logs
- logs should always go to stdout
- logs should be written to /var/log/
- rotate logs using logrotate(1)

---

## 4. Process logs
std{out,err} -> /var/log/
```sh
$ node . 2>&1 /var/log/my-app.log
```

---

## 4. Process logs
Write to file + console:
```sh
$ node . | tee 2>&1 /var/log/my-app.log
```

---

## 5. Packages
- error: error constructor / wrapper
- source-map-support: fix transpile stack traces
- http-ndjson: log http req / res
- size-stream: get http res size
- bole-stream: log ndjson into bole
- stdout-stream: non-blocking stdout
- server-summary: log base server info
- garnish: prettify bole output

---

## 5. Packages
Fix stack traces after transpilation:
```js
require('source-map-support/register')
```

---

## 5. Packages
Error constructors using `error`:
```js
const typedError = require('error/typed')
const badRequestError = typedError({
  type: 'server.4xx',
  message: {message},
  statusCode: 400
})
const err = badRequestError({ message: 'whoops' })
```

---

## 5. Packages
Use `stdout-stream`.

Stdout blocks, `end` never prints:
``` js
console.error('start');
process.stdout.write(new Buffer(1024*1024));
console.error('end');
```

```sh
$ node example.js | sleep 1000
```

---

## 5. Packages
Log base server info on start:
```js
const summary = require('server-summary')
const http = require('http')

const server = http.createServer(function (req, res) {
  // logic goes here
})
server.listen(8080, summary(server))
```

---

## 5. Packages
Demo 4

---

## 5. Packages
Log http req,res:
```js
const boleStream = require('bole-stream')
const httpNdjson = require('http-ndjson')

const logStream = boleStream({ level: 'debug' })
http.createServer(function (req, res) {
  const httpLogger = httpNdjson(req, res)
  httpLogger.pipe(logStream, { end: false })
}).listen()
```

---

## 5. Packages
Demo 5

---

## 5. Packages
Log res size:
```js
const boleStream = require('bole-stream')
const httpNdjson = require('http-ndjson')
const sizeStream = require('size-stream')
const app = require('./app')()

const logStream = boleStream({ level: 'debug' })
http.createServer(function (req, res) {
  const httpLogger = httpNdjson(req, res)
  httpLogger.pipe(logStream, { end: false })

  const size = sizeStream()
  size.once('size', size => httpLogger.setContentLength(size))

  app(req, res).pipe(size).pipe(res)
}).listen()
```

---

## 5. Packages
Demo 6

---

## Recap
- all errors should inherit from Error
- errbacks are for expected errors
- throw is for unexpected errors
- node logs in ndjson
- logs should always go to stdout
- logs should be written to /var/log/
- rotate logs with logrotate(1)

---

## log.info('Thank you!')
- twitter.com/yoshuawuyts
- github.com/yoshuawuyts

Slides available on:
- https://github.com/yoshuawuyts/talks/2015-11-errors-and-logs
- npm i -g tslide to view the slides
