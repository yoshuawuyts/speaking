const http = require('http')
const pbuf = require('protocol-buffers')
const fs = require('fs')

const schema = pbuf(fs.readFileSync('./schema.proto'))

const req = http.request('http://localhost:8080')
const message = schema.Test.encode({
  num: 42,
  payload: 'Hello World'
})

req.write(message)
req.end()
