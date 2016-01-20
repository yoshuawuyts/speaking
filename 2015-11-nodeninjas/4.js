const summary = require('server-summary')
const http = require('http')

const server = http.createServer(function (req, res) {
  server.close()
})
server.listen(8080, summary(server))

http.get('http://localhost:8080')

// ! node 4.js
