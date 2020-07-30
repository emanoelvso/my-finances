import { errorResponse } from './sharedSchemas'

const properties = {
  name: { type: 'string' },
  balance: { type: 'number' },
  incomeAmount: { type: 'number' },
  expensesAmount: { type: 'number' }
}

export const createAccount = {
  body: {
    type: 'object',
    required: ['name'],
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

export const deleteAccountInfoSchema = {
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

export const fetchAccountInfoSchema = {
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
