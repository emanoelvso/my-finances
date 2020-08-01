const request = require('supertest')

const Account = require('../../../src/models/account')

process.env.DB_URI = process.env.MONGO_URL

const app = require('../../../src/app')

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  if (process.env.NODE_ENV === 'test') {
    await Account.deleteMany({})
  }

  await app.close()
})

describe('POST /account', () => {
  describe('statusCode 201', () => {
    it('when input is correct, should return 201', async () => {
      const response = await request(app.server)
        .post('/api/v1/account')
        .send({ name: 'Nubank' })

      expect(response.status).toBe(201)
      expect(response.body).toMatchObject({
        message: 'Account create succefully'
      })
      expect(response.body).toHaveProperty('id')
    })
  })
})
