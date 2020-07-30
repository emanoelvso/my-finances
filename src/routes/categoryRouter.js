import {
  fetchCategoryInfo,
  registerCategory,
  deleteCategory
} from '../controllers/categoryControl'

import {
  fetchCategoryInfoSchema,
  createCategory,
  deleteCategoryInfoSchema
} from '../schemas/categorySchema'

const createCategoryRouter = async instance => {
  instance.route({
    url: '/category',
    method: 'POST',
    schema: createCategory,
    handler: registerCategory
  })

  instance.route({
    url: '/category/:id',
    method: 'DELETE',
    schema: deleteCategoryInfoSchema,
    handler: deleteCategory
  })

  instance.route({
    url: '/category/:id',
    method: 'GET',
    schema: fetchCategoryInfoSchema,
    handler: fetchCategoryInfo
  })
}

export default createCategoryRouter
