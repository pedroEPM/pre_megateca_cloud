import { AdvSearch_ } from '../queries/advSearch.js'

import { setParams } from '../utils/cFunctions.js'

export class AdvSearch {
  constructor () {
    this.advSearch = new AdvSearch_()
  }

  async getAdvSearch (req, res) {
    try {
      const cQuery = setParams(req.query)
      const allElements = await this.advSearch.find(cQuery)

      //   const pdfs = await this.pdfs.find(req.query)
      res.status(200).json({
        ok: true,
        msg: allElements
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        ok: false,
        msg: error
      })
    }
  }
}
