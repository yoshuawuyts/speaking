const myController = require('./controllers/myDomain/myController')
const somethingElse = require('../../foo/bar/bin/baz')
const myModel = require('./models/users/someUser')
const express = require('express')

const server = express()

server.get('/hello', function () {
  somethingElse()
  return myController(myModel())
})
