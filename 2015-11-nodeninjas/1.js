const err = new Error('oh my, something went wrong')
console.log(err.stack)
console.log(err.message)
err.foo = 'bar'
throw err

// ! node 1.js
