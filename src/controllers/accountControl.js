const {
  fetchAccountInformation,
  insertAccount,
  deleteAccountService
} = require('../services/accountServices')

const registerAccount = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertAccount(body)

  return reply.code(201).send({ message: 'Account create succefully', id })
}

const fetchAccountInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchAccountInformation(id)

  return reply.code(200).send(result)
}

const deleteAccount = async (req, reply) => {
  const { id } = req.params

  await deleteAccountService(id)

  return reply.code(200).send({ message: 'Account successfully removed' })
}

module.exports = { registerAccount, fetchAccountInfo, deleteAccount }
