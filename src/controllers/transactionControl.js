import {
  insertTransaction,
  fetchTransactionInformation,
  deleteTransactionService
} from '../services/transaction'

export const registerTransaction = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertTransaction(body)

  return reply.code(201).send({ message: 'Transação criada com sucesso', id })
}

export const fetchTransactionInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchTransactionInformation(id)

  return reply.code(200).send(result)
}

export const deleteTransaction = async (req, reply) => {
  const { id } = req.params

  await deleteTransactionService(id)

  return reply.code(200).send({ message: 'Transação removida com sucesso' })
}
