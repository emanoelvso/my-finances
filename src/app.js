const fastify = require('fastify')
const fp = require('fastify-plugin')
const fastifyHelmet = require('fastify-helmet')

const log = require('./utils/logger')
const appConnection = require('./plugins/database')
const openapi = require('./plugins/openApi')
const apiv1Routes = require('./routes/apiV1')
const notFoundHandler = require('./plugins/notFoundHandler')
const cors = require('cors')

const app = fastify({
  logger: log,
  disableRequestLogging: true,
  ignoreTrailingSlash: true
})

app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.setNotFoundHandler(notFoundHandler)
app.register(fp(appConnection))
app.register(fp(openapi))
app.register(fastifyHelmet)
app.register(apiv1Routes, { prefix: '/api/v1' })

module.exports = app
