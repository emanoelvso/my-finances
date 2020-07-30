import { errorResponse } from './sharedSchemas'

const properties = {
  balance: { type: 'number' },
  savingPercentage: { type: 'number' }
}

export const fetchReportInfoSchema = {
  response: {
    '200': {
      type: 'object',
      properties
    }
  },
  ...errorResponse
}
