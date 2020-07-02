const Router = require('koa-joi-router')
const router = Router()

const donate = require('./donate')

router.use('/donate', donate)

module.exports = router
