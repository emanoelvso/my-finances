const { fetchReportInformation } = require('../services/reportService')

const fetchReportInfo = async (req, reply) => {
  const result = await fetchReportInformation()

  reply.code(200).send(result)
}

module.exports = { fetchReportInfo } 