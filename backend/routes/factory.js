const { Donation } = require('../models')

const DonateController = require('./donate/donates.controller')
const DonateService = require('./donate/donates.service')

const newDonateController = new DonateController(new DonateService(Donation))

module.exports = {
  DonateController: newDonateController,
}
