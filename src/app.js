import fastify from 'fastify'
import apiRoutes from './routes/api'

const app = fastify({})

app.register(apiRoutes, { prefix: '/api' })

export default app
