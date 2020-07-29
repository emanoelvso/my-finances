import app from './app'

const start = async () => {
  await app.listen(3000)
  console.log('Server running')
}

start()
