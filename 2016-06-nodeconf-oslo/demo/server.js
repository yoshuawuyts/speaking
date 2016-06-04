const http = require('http')
const pump = require('pump')
const pbs = require('pbs')
const fs = require('fs')

const port = 8080
const messages = pbs(fs.readFileSync('./schema.proto'))

http.createServer(function (req, res) {
  const decoder = messages.Test.decode(function (msg) {
    console.log('msg: ', msg)
  })
  pump(req, decoder)
  res.end()
}).listen(port, () => console.log(`listening on port ${port}`))
