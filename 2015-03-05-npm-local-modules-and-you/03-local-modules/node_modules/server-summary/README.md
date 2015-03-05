# server-summary
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Log basic server information after an http server start.

## Installation
```bash
$ npm install server-summary
```

## Usage
```js
const serverSummary = require('server-summary')
const http          = require('http')

http.createServer().listen(null, serverSummary)
//
// Port 61771
// Env  development
//
```

## Why?
Knowing on what port your server is listening is nice to have. This module
logs some basic information after your server has started to `stdout`.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/server-summary.svg?style=flat-square
[npm-url]: https://npmjs.org/package/server-summary
[travis-image]: https://img.shields.io/travis/yoshuawuyts/server-summary.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/server-summary
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/server-summary.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/server-summary?branch=master
[downloads-image]: http://img.shields.io/npm/dm/server-summary.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/server-summary
