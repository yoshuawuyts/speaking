const http = require('http')

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/css')
  res.end('.foo { color: rebecca-purple }')
}).listen(8080)
