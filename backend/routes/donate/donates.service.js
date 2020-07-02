class DonatesService {
  constructor(DonationSchema) {
    this.DonationSchema = DonationSchema
  }
  async addDonation(data) {
    await this.DonationSchema.create(data)
  }
}

module.exports = DonatesService
