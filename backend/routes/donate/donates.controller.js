class DonatesController {
  constructor(donatesSrv) {
    this.donatesSrv = donatesSrv
  }
  async addDonation(ctx) {
    const body = ctx.request.body
    await this.donatesSrv.addDonation(body)
    ctx.status = 200
    ctx.body = { ok: true }
  }
}

module.exports = DonatesController
