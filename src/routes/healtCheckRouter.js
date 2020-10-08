const healtCheckerRouter = async instance => {
  instance.route({
    url: '/status',
    method: 'GET',
    handler: (req, reply) => {
      return reply.code(200).send({ message: 'OK' })
    }
  })
}

module.exports = healtCheckerRouter
