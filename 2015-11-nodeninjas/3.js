const assert = require('assert')

square(3)

function square (num) {
  // compare and throw if false
  assert.equal(typeof num, 'number', 'num is number')
  return num * num
}

// ! node 3.js
