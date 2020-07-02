const mongoose = require('./mongoose')
const config = require('../config/env').mongoose

const primaryConnection = mongoose.createConnection(
  config.credentials,
  config.primaryConnectionParameters
)

primaryConnection.on('connected', () => {
  console.log(`primary MongoDB connected: ${config.credentials}`)
})

primaryConnection.on('error', (err) => {
  console.log(`primary connection failed: ${err.message}`)
  process.exit(1)
})

module.exports = primaryConnection
