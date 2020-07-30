const notFoundHandler = (req, reply) => {
  return reply.code(404).send({ code: 404, message: 'Rota não encontrada' })
}

export default notFoundHandler
