
import pdfs from '../models/mongo/pdfs.js'
import { Notebooks_ } from './notebooks.js'
import { Publciations_ } from './publications.js'

export class AdvSearch_ {
  constructor () {
    this.notebooks_ = new Notebooks_()
    this.publications_ = new Publciations_()
  }

  async find (query) {
    try {
      // const cQuery = {}
      const lastQuery = query.isFirstTime === -1 ? [
        // { $match: {}},

        {
          $sort: {
            customIdReverse: Number(query.sort)
          }
        },
        { $skip: Number(query.skip) },
        { $limit: Number(query.limit) },
        {
          $lookup: {
            from: 'publications',
            localField: 'publication',
            foreignField: '_id',
            as: 'publication'
          }
        },
        {
          $lookup: {
            from: 'notebooks',
            localField: 'notebook',
            foreignField: '_id',
            as: 'notebook'
          }
        }
      ] : [
        {
          $count: 'totalMatches' // Nombre del campo en el que se almacenará el conteo
        }
      ]

      if (query.date) {
        lastQuery.unshift({
          $match: {
            datePublication: {
              $gte: query.date.gte,
              $lte: query.date.lte
            }
          }
        })
      }

      const allPDFs = await pdfs.aggregate(lastQuery)

      return query.isFirstTime === -1
        ? allPDFs.map(element => {
            element.newSRCPDFThumbnail = element.newSRCPDFThumbnail.replace('/thumbs/pdfs/', '/')
            element.newSRCPDF = element.newSRCPDF.replace('/pdfs/', '/bigPdf/').replace('.pdf', '_.jpg')
            return element
          })
        : allPDFs
    } catch (error) {
      console.log('Error find - queries ', error)
      return error
    }
  }

  async findByNewId (id) {
    try {
      const pdf = await pdfs.findOne({
        isNewId: id
      }).populate('notebook').populate('publication')

      if (pdf) {
        pdf.newSRCPDFThumbnail = pdf?.newSRCPDFThumbnail.replace('/thumbs/pdfs/', '/')
        pdf.newSRCPDF = pdf?.newSRCPDF.replace('/pdfs/', '/bigPdf/').replace('.pdf', '_.jpg')
      }

      return pdf ?? null
    } catch (error) {
      console.log('Error find by new ID - queries ', error)
      return error
    }
  }
}
