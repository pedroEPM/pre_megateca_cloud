import { PDFS_ } from '../queries/pdfs.js'
 
export class PDFS {
  constructor() {
    this.pdfs = new PDFS_();
  }

  async getAllPDFs(req, res) {
    try {
      
      const pdfs = await this.pdfs.find(req.query)
      res.status(200).json({
        ok: true,
        msg: pdfs
      })
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg: error
      })
    }
  }

  async getPDFByNewId(req, res) {
    try {
      
      const { id } = req.params;
      const pdf = await this.pdfs.findByNewId('P-' + id)
      res.status(200).json({
        ok: true,
        msg: pdf
      })
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg: error
      })
    }
  }
} 