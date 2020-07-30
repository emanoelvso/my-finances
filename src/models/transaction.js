import mongoose from 'mongoose'

const types = ['expense', 'income']

const Transaction = new mongoose.Schema({
  account: {
    type: 'string',
    required: true
  },
  description: {
    type: 'string',
    required: true
  },
  value: {
    type: 'number',
    required: true
  },
  category: {
    type: 'string',
    required: true
  },
  type: {
    type: String,
    enum: {
      values: types,
      message: prop =>
        `${prop.value} tipo inválido tipo, valores aceito: ${types.join(', ')}`
    }
  }
})

export default mongoose.model('Transaction', Transaction)
