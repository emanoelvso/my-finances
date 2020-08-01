const {
  fetchTransactionInfo,
  registerTransaction,
  deleteTransaction
} = require('../controllers/transactionControl')

const {
  createTransactionInfoSchema,
  fetchTransactionInfoSchema,
  deleteTransactionInfoSchema
} = require('../schemas/transactionSchema')

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

module.exports =  createTransactionRouter
