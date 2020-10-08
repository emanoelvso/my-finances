const errorHandler = require('../plugins/errorHandler')
const notFoundHandler = require('../plugins/notFoundHandler')
const accountRouter = require('./accountRouter')
const categoryRouter = require('./categoryRouter')
const transactionRouter = require('./transactionRouter')
const reportRouter = require('./reportRouter')
const healthCheckRouter = require('./healtCheckRouter')

const createMainRoutes = async instance => {
  instance.setNotFoundHandler(notFoundHandler)
  instance.setErrorHandler(errorHandler)
  instance.register(accountRouter)
  instance.register(categoryRouter)
  instance.register(transactionRouter)
  instance.register(reportRouter)
  instance.register(healthCheckRouter)
}

module.exports = createMainRoutes
