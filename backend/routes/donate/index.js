const Router = require('koa-joi-router')
const router = Router()
const Joi = require('joi')
const consts = require('../../utils/consts')

const { DonateController } = require('../factory')

router.route({
  method: 'post',
  path: '/',
  validate: {
    body: {
      amount: Joi.number().min(1).required(),
      currency: Joi.string().valid(...consts.CURRENCY_TYPES),
    },
    type: 'json',
    output: {
      200: {
        body: {
          ok: Joi.boolean(),
        },
      },
    },
    maxBody: '64kb',
  },
  handler: DonateController.addDonation.bind(DonateController),
})

module.exports = router
