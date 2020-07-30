import errorHandler from '../plugins/errorHandler'
import notFoundHandler from '../plugins/notFoundHandler'
import accountRouter from './accountRouter'
import categoryRouter from './categoryRouter'
import transactionRouter from './transactionRouter'
import reportRouter from './reportRouter'

const createMainRoutes = async instance => {
  instance.setNotFoundHandler(notFoundHandler)
  instance.setErrorHandler(errorHandler)
  instance.register(accountRouter)
  instance.register(categoryRouter)
  instance.register(transactionRouter)
  instance.register(reportRouter)
}

export default createMainRoutes
