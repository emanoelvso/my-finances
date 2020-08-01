const { errorResponse } = require('./sharedSchemas')

const properties = {
  name: { type: 'string' },
  type: { type: 'string' }
}

const createCategory = {
  body: {
    type: 'object',
    required: ['name', 'type'],
    properties
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        id: { type: 'string' }
      }
    },
  }
}

const deleteCategoryInfoSchema = {
  querystring: {
    id: {
      type: 'string'
    }
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...errorResponse
  }
}

const fetchCategoryInfoSchema = {
  querystring: {
    id: {
      type: 'string'
    }
  },
  response: {
    '200': {
      type: 'object',
      properties
    }
  },
  ...errorResponse
}

module.exports = { 
  createCategory,
  deleteCategoryInfoSchema,
  fetchCategoryInfoSchema
 } 