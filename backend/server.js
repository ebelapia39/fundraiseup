const Koa = require('koa')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const errorHandler = require('./utils/errorHandler')
const router = require('./routes')
const config = require('./config/env')

const app = new Koa()

app.use(logger())

app.use(
  koaBody({
    jsonLimit: '1mb',
  })
)

app.use(cors())

app.use(errorHandler)

app.use(router.middleware())

app.listen(config.port, function () {
  console.log(`Server running on ${config.port}`)
})

module.exports = app
