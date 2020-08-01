const mongoose = require('mongoose')
const config = require('../config/global')
const log = require('../utils/logger')

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

module.exports = createConnection
