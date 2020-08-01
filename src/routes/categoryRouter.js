const {
  fetchCategoryInfo,
  registerCategory,
  deleteCategory
} = require('../controllers/categoryControl')

const {
  fetchCategoryInfoSchema,
  createCategory,
  deleteCategoryInfoSchema
} = require('../schemas/categorySchema')

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

module.exports =  createCategoryRouter
