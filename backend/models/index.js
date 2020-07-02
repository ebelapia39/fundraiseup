const connection = require('./connection')
const Donation = require('./Donation')

module.exports = {
  Donation: Donation(connection),
}
