const mongoose = require('mongoose')

const types = ['expense', 'income']

const Category = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true
    },
    type: {
      type: String,
      enum: {
        values: types,
        message: prop =>
          `${prop.value} tipo inválido tipo, valores aceito: ${types.join(
            ', '
          )}`
      }
    }
  },
  {
    timestamps: true
  }
)

module.exports =  mongoose.model('Category', Category)
