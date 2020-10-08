const {
  fetchAccountInfo,
  registerAccount,
  deleteAccount
} = require('../controllers/accountControl')

const {
  fetchAccountInfoSchema,
  createAccount,
  deleteAccountInfoSchema
} = require('../schemas/accountSchema')

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

module.exports = createAccountRouter
