const {
  fetchCategoryInformation,
  insertCategory,
  deleteCategoryService
} = require('../services/categoryServices')

const registerCategory = async (req, reply) => {
  const { body } = req

  const { _id: id } = await insertCategory(body)

  return reply.code(201).send({ message: 'Category created successfully', id })
}

const fetchCategoryInfo = async (req, reply) => {
  const { id } = req.params

  const result = await fetchCategoryInformation(id)

  return reply.code(200).send(result)
}

const deleteCategory = async (req, reply) => {
  const { id } = req.params

  await deleteCategoryService(id)

  return reply.code(200).send({ message: 'Category removed successfully' })
}

module.exports = { 
  registerCategory,
  fetchCategoryInfo,
  deleteCategory
 } 