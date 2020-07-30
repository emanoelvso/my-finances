import log from '../utils/logger'
import { ApplicationError } from '../definitions/Errors'

const errorMiddleware = (error, req, reply) => {
  if (error instanceof ApplicationError) {
    return reply
      .code(error.statusCode || 400)
      .send({ code: error.statusCode, message: error.message })
  }

  log.error(`Erro Interno: ${error && error.message}`, {
    stack: error.stack,
    body: req.body || {},
    ip: req.ip,
    hostname: req.hostname,
    headers: req.headers
  })

  return reply
    .code(error.statusCode || 500)
    .send({ code: error.statusCode, message: error && error.message })
}

export default errorMiddleware
