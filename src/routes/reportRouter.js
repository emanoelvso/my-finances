const { fetchReportInfo } = require('../controllers/reportControl')

const { fetchReportInfoSchema } = require('../schemas/reportSchema')

const createReportRouter = async instance => {
  instance.route({
    url: '/report/',
    method: 'GET',
    schema: fetchReportInfoSchema,
    handler: fetchReportInfo
  })
}

module.exports =  createReportRouter
