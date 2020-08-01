const Transaction = require('../models/transaction')

const balanceService = async account => {
  const allTransactions = await Transaction.find({ account: account.name })

  const { incomeAmount, expensesAmount } = allTransactions.reduce(
    (accumulator, transaction) => {
      switch (transaction.type) {
        case 'income':
          accumulator.incomeAmount += Number(transaction.value)
          break

        case 'expense':
          accumulator.expensesAmount += Number(transaction.value)
          break

        default:
          break
      }

      return accumulator
    },
    { incomeAmount: 0, expensesAmount: 0 }
  )

  const balance = incomeAmount - expensesAmount

  return {
    incomeAmount,
    expensesAmount,
    balance
  }
}

module.exports = { balanceService }
