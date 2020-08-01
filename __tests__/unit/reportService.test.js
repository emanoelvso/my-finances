const mongoose = require('mongoose')

const { fetchReportInformation } = require('../../src/services/reportService')
const Account = require('../../src/models/account')

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 3
  })
})

afterAll(async () => {
  if (process.env.NODE_ENV === 'test') {
    await Account.deleteMany({})
  }
})

describe('reportService', () => {
  it('when the input is correct, should generate correct output', async () => {
    await Account.create({
      name: 'Nubank',
      balance: 1000,
      incomeAmount: 2000,
      expenseAmount: 1000
    })

    const response = await fetchReportInformation()

    expect(response).toMatchObject({
      balance: 1000,
      savingPercentage: 50
    })
  })
})
