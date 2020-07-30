import pino from 'pino'

const createLogger = () => {
  return pino({ prettyPrint: true })
}

export default createLogger()
