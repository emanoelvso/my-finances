import {
  fetchTransactionInfo,
  registerTransaction,
  deleteTransaction
} from '../controllers/transactionControl'

import {
  createTransactionInfoSchema,
  fetchTransactionInfoSchema,
  deleteTransactionInfoSchema
} from '../schemas/transactionSchema'

const createTransactionRouter = async instance => {
  instance.route({
    url: '/transaction',
    method: 'POST',
    schema: createTransactionInfoSchema,
    handler: registerTransaction
  })
  instance.route({
    url: '/transaction/:id',
    method: 'GET',
    schema: fetchTransactionInfoSchema,
    handler: fetchTransactionInfo
  })
  instance.route({
    url: '/transaction/:id',
    method: 'DELETE',
    schema: deleteTransactionInfoSchema,
    handler: deleteTransaction
  })
}

export default createTransactionRouter
