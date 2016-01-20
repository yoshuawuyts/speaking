const json = require('JSONStream')
const level = require('level')
const http = require('http')

const db = level('/var/tmp/campdb')

const server = http.createServer(function (req, res) {
  db.createReadStream()
    .pipe(json.stringify())
    .pipe(res)
})

server.listen(8080, function () {
  console.log('listening on port 8080')
})
