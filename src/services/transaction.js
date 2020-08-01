const { ApplicationError } = require('../definitions/Errors')

const Transaction = require('../models/transaction')
const Account = require('../models/account')
const Category = require('../models/category')

const { balanceService } = require('./balanceService')

const insertTransaction = async body => {
  const account = await Account.findOne({ _id: body.account })
  const category = await Category.findOne({ _id: body.category })

  if (!account) throw new ApplicationError('No account found', 404)

  if (!category) throw new ApplicationError('No categories found', 404)

  const input = {
    ...body,
    account: account.name,
    category: category.name,
    type: category.type
  }

  const transaction = await Transaction.create(input)

  const { balance, incomeAmount, expensesAmount } = await balanceService(
    account
  )

  await account.set({ balance, incomeAmount, expensesAmount }).save()

  return transaction
}

const fetchTransactionInformation = async _id => {
  const transaction = await Transaction.findOne({ _id })

  if (!transaction)
    throw new ApplicationError('No transactions were found', 404)

  return transaction
}

const deleteTransactionService = async _id => {
  const transaction = await Transaction.findOne({ _id })

  if (!transaction)
    throw new ApplicationError('No transactions were found', 404)

  return Transaction.deleteOne({ _id })
}

module.exports = { 
  insertTransaction,
  fetchTransactionInformation,
  deleteTransactionService
 } 