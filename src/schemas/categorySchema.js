import { errorResponse } from './sharedSchemas'

const properties = {
  name: { type: 'string' },
  type: { type: 'string' }
}

export const createCategory = {
  body: {
    type: 'object',
    required: ['name', 'type'],
    properties
  },
  response: {
    '2xx': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        id: { type: 'string' }
      }
    },
    ...errorResponse
  }
}

export const deleteCategoryInfoSchema = {
  querystring: {
    id: {
      type: 'string'
    }
  },
  response: {
    '2xx': {
      type: 'object',
      properties: {
        message: { type: 'string' }
      }
    },
    ...errorResponse
  }
}

export const fetchCategoryInfoSchema = {
  querystring: {
    id: {
      type: 'string'
    }
  },
  response: {
    '2xx': {
      type: 'object',
      properties
    }
  },
  ...errorResponse
}
