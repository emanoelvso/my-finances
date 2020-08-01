const Account = require('../models/account')
const { ApplicationError } = require('../definitions/Errors')

const fetchAccountInformation = async _id => {
  const account = await Account.findOne({ _id })

  if (!account) throw new ApplicationError('No account found', 404)

  return account
}

const insertAccount = async body => {
  return Account.create(body)
}

const deleteAccountService = async _id => {
  const account = await Account.findOne({ _id })

  if (!account) throw new ApplicationError('No account found', 404)

  return Account.deleteOne({ _id })
}

module.exports = { 
  fetchAccountInformation,
  insertAccount,
  deleteAccountService
 } 