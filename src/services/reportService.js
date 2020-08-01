const Account = require('../models/account')

const fetchReportInformation = async () => {
  const accounts = await Account.find({})

  if (accounts.length) {
    const balance = accounts.reduce((total, account) => {
      return (total += Number(account.balance))
    }, 0)

    const totalIncome = accounts.reduce((total, account) => {
      return (total += Number(account.incomeAmount))
    }, 0)

    const savingPercentage = (balance * 100) / totalIncome

    return {
      balance,
      savingPercentage
    }
  }

  return {
    balance: 0,
    savingPercentage: 0
  }
}

module.exports = { fetchReportInformation } 