import Account from '../models/account'
import { ApplicationError } from '../definitions/Errors'

export const fetchAccountInformation = async _id => {
  const account = await Account.findOne({ _id })

  if (!account) throw new ApplicationError('No account found', 404)

  return account
}

export const insertAccount = async body => {
  return Account.create(body)
}

export const deleteAccountService = async _id => {
  const account = await Account.findOne({ _id })

  if (!account) throw new ApplicationError('No account found', 404)

  return Account.deleteOne({ _id })
}
