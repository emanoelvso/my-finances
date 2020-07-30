import { ApplicationError } from '../definitions/Errors'

import Transaction from '../models/transaction'
import Account from '../models/account'
import Category from '../models/category'

import { balanceService } from './balanceService'

export const insertTransaction = async body => {
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

export const fetchTransactionInformation = async _id => {
  const transaction = await Transaction.findOne({ _id })

  if (!transaction)
    throw new ApplicationError('No transactions were found', 404)

  return transaction
}

export const deleteTransactionService = async _id => {
  const transaction = await Transaction.findOne({ _id })

  if (!transaction)
    throw new ApplicationError('No transactions were found', 404)

  return Transaction.deleteOne({ _id })
}
