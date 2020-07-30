import {
  fetchCategoryInformation,
  insertCategory,
  deleteCategoryService
} from '../services/categoryServices'

export const registerCategory = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertCategory(body)

  return reply.code(201).send({ message: 'Categoria criada com sucesso', id })
}

export const fetchCategoryInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchCategoryInformation(id)

  return reply.code(200).send(result)
}

export const deleteCategory = async (req, reply) => {
  const { id } = req.params

  await deleteCategoryService(id)

  return reply.code(200).send({ message: 'Categoria removida com sucesso' })
}
