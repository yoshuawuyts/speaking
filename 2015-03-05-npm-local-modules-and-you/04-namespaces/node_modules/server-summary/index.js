
const assert = require('assert')
const chalk  = require('chalk')

module.exports = serverSummary

function serverSummary() {
  assert.equal(typeof this.address, 'function')

  const address = this.address()
  const port    = address.port

  console.log('')
  console.log(chalk.green('  Port ') + port)
  console.log(chalk.green('  Env  ') + process.env.NODE_ENV)
  console.log('')
}
