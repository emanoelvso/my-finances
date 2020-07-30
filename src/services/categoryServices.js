import Category from '../models/category'
import { ApplicationError } from '../definitions/Errors'

export const fetchCategoryInformation = async _id => {
  const category = await Category.findOne({ _id })

  if (!category) throw new ApplicationError('No account found', 404)

  return category
}

export const insertCategory = async body => Category.create(body)

export const deleteCategoryService = async _id => {
  const category = await Category.findOne({ _id })

  if (!category) throw new ApplicationError('No account found', 404)

  return Category.deleteOne({ _id })
}
