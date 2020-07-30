import { errorResponse } from './sharedSchemas'

const properties = {
  account: { type: 'string' },
  description: { type: 'string' },
  value: { type: 'number' },
  category: { type: 'string' },
  type: { type: 'string' }
}

export const createTransactionInfoSchema = {
  body: {
    type: 'object',
    required: ['account', 'description', 'value', 'category'],
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

export const deleteTransactionInfoSchema = {
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

export const fetchTransactionInfoSchema = {
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
