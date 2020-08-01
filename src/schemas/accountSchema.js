const { errorResponse } = require('./sharedSchemas')

const properties = {
  name: { type: 'string' },
  balance: { type: 'number' },
  incomeAmount: { type: 'number' },
  expensesAmount: { type: 'number' }
}

const createAccount = {
  body: {
    type: 'object',
    required: ['name'],
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

const deleteAccountInfoSchema = {
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

const fetchAccountInfoSchema = {
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
  createAccount,
  deleteAccountInfoSchema,
  fetchAccountInfoSchema
 } 