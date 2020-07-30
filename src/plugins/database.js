import mongoose from 'mongoose'
import config from '../config/global'
import log from '../utils/logger'

const createConnection = async instance => {
  const defaultConfig = {
    useNewUrlParser: true,
    autoReconnect: true,
    reconnectTries: 3
  }

  const connection = await mongoose.connect(config.db.uri || '', defaultConfig)

  log.info(`Database connected`)

  instance.addHook('onClose', () => connection.disconnect())
  instance.decorate('conn', connection)
}

export default createConnection
