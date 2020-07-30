import openApi from 'fastify-oas'

const createSwagger = async instance => {
  const options = {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'Tecnospeed Talks',
        description: 'Uma Api de controle de gastos',
        version: '1.0.0'
      },
      host: 'localhost',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  }
  instance.register(openApi, options)
}

export default createSwagger
