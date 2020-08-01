const pino = require('pino')

const createLogger = () => {
  return pino({ prettyPrint: true })
}

module.exports =  createLogger()
