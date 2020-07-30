import { fetchReportInformation } from '../services/reportService'

export const fetchReportInfo = async (req, reply) => {
  const result = await fetchReportInformation()

  reply.code(200).send(result)
}
