const Category = require('../models/category')
const { ApplicationError } = require('../definitions/Errors')

const fetchCategoryInformation = async _id => {
  const category = await Category.findOne({ _id })

  if (!category) throw new ApplicationError('No account found', 404)

  return category
}

const insertCategory = async body => Category.create(body)

const deleteCategoryService = async _id => {
  const category = await Category.findOne({ _id })

  if (!category) throw new ApplicationError('No account found', 404)

  return Category.deleteOne({ _id })
}

module.exports = { 
  fetchCategoryInformation,
  insertCategory,
  deleteCategoryService
 } 