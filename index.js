const process = require('process')
const App = require('./app')

new App().start()

process.on('SIGINT', haveToExitHandler.bind(null, { exitType: 'SIGINT' }))
process.on('uncaughtException', haveToExitHandler.bind(null, { exitType: 'uncaughtException' }))
process.on('exit', beforeExitHandler.bind(null, { clean: true }))

function haveToExitHandler(options, err) {
  if (err) {
    console.error('beforeExitHandler:')
    console.error('err.message: ', err.message)
    console.error('error.stack', err.stack)
  }
  return process.exit(0)
}

function beforeExitHandler(options, err) {
  if (err) {
    console.error('beforeExitHandler:')
    console.error('err.message:', err.message)
    console.error('err.stack:', err.stack)
  }

  if (options.clean) {
    console.log('__app is exit!')
    console.log('__Goodbye!')
  }
}
