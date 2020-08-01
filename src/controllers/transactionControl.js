const {
  insertTransaction,
  fetchTransactionInformation,
  deleteTransactionService
} = require('../services/transaction')

const registerTransaction = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertTransaction(body)

  return reply.code(201).send({ message: 'Transaction successfully removed', id })
}

const fetchTransactionInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchTransactionInformation(id)

  return reply.code(200).send(result)
}

const deleteTransaction = async (req, reply) => {
  const { id } = req.params

  await deleteTransactionService(id)

  return reply.code(200).send({ message: 'Transaction created successfully' })
}

module.exports = { 
  registerTransaction,
  fetchTransactionInfo,
  deleteTransaction
 } 