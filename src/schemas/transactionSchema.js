const { errorResponse } = require('./sharedSchemas')

const properties = {
  account: { type: 'string' },
  description: { type: 'string' },
  value: { type: 'number' },
  category: { type: 'string' },
  type: { type: 'string' }
}

const createTransactionInfoSchema = {
  body: {
    type: 'object',
    required: ['account', 'description', 'value', 'category'],
    properties
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        message: { type: 'string' },
        id: { type: 'string' }
      }
    }
  }
}

const deleteTransactionInfoSchema = {
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

const fetchTransactionInfoSchema = {
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
  createTransactionInfoSchema,
  deleteTransactionInfoSchema,
  fetchTransactionInfoSchema
 } 