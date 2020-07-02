const config = {
  port: 3000,
  mongoose: {
    credentials: 'mongodb://localhost:27017/fundraiseup',
    primaryConnectionParameters: {
      autoIndex: true,
      autoReconnect: true,
      keepAlive: true,
      poolSize: 10,
      useCreateIndex: true,
      useNewUrlParser: true,
    },
  },
}

module.exports = config
