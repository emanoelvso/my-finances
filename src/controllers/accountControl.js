import {
  fetchAccountInformation,
  insertAccount,
  deleteAccountService
} from '../services/accountServices'

export const registerAccount = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertAccount(body)

  return reply.code(201).send({ message: 'Conta criada com sucesso', id })
}

export const fetchAccountInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchAccountInformation(id)

  return reply.code(200).send(result)
}

export const deleteAccount = async (req, reply) => {
  const { id } = req.params

  await deleteAccountService(id)

  return reply.code(200).send({ message: 'Conta removida com sucesso' })
}
