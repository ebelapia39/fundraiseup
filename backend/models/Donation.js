'use strict'
const mongoose = require('./mongoose')

const donationSchema = mongoose.Schema(
  {
    amount: { type: Number, min: 1 },
    currency: { type: String, required: true },
  },
  { _id: true, timestamps: true }
)

donationSchema.index({ currency: 1 })
donationSchema.index({ amount: 1 })

module.exports = function (connection) {
  return connection.model('Donation', donationSchema)
}
