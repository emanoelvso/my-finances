import { fetchReportInfo } from '../controllers/reportControl'

import { fetchReportInfoSchema } from '../schemas/reportSchema'

const createReportRouter = async instance => {
  instance.route({
    url: '/report/',
    method: 'GET',
    schema: fetchReportInfoSchema,
    handler: fetchReportInfo
  })
}

export default createReportRouter
