import 'dotenv/config'

const { PORT, DB_URI } = process.env

const config = {
  port: PORT,
  db: {
    uri: DB_URI
  }
}

export default config
