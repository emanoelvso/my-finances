export const errorResponse = {
  404: {
    type: 'object',
    properties: {
      code: { type: 'number' },
      message: { type: 'string' }
    }
  }
}
