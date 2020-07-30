import fastify from 'fastify'
import fp from 'fastify-plugin'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'

import log from './utils/logger'
import appConnection from './plugins/database'
import openapi from './plugins/openApi'
import apiv1Routes from './routes/apiV1'
import notFoundHandler from './plugins/notFoundHandler'

const defaultConfig = {
  logger: log,
  disableRequestLogging: true,
  ignoreTrailingSlash: true
}

const app = fastify(defaultConfig)

app.setNotFoundHandler(notFoundHandler)
app.register(fp(appConnection))
app.register(fp(openapi))
app.register(fastifyCors)
app.register(fastifyHelmet)
app.register(apiv1Routes, { prefix: '/api/v1' })

export default app
