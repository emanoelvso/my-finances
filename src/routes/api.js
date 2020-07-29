const apiRoutes = async instace => {
  instace.route({
    url: '/',
    method: 'GET',
    handler: (req, res) => res.send({ message: 'Hello World' })
  })
}

export default apiRoutes
