import {
  fetchAccountInfo,
  registerAccount,
  deleteAccount
} from '../controllers/accountControl'

import {
  fetchAccountInfoSchema,
  createAccount,
  deleteAccountInfoSchema
} from '../schemas/accountSchema'

const createAccountRouter = async instance => {
  instance.route({
    url: '/account',
    method: 'POST',
    schema: createAccount,
    handler: registerAccount
  })

  instance.route({
    url: '/account/:id',
    method: 'DELETE',
    schema: deleteAccountInfoSchema,
    handler: deleteAccount
  })

  instance.route({
    url: '/account/',
    method: 'GET',
    schema: fetchAccountInfoSchema,
    handler: fetchAccountInfo
  })

  instance.route({
    url: '/account/:id',
    method: 'GET',
    schema: fetchAccountInfoSchema,
    handler: fetchAccountInfo
  })
}

export default createAccountRouter
