const { errorResponse } = require('./sharedSchemas')

const properties = {
  balance: { type: 'number' },
  savingPercentage: { type: 'number' }
}

const fetchReportInfoSchema = {
  response: {
    '200': {
      type: 'object',
      properties
    }
  },
  ...errorResponse
}

module.exports = { fetchReportInfoSchema } 
