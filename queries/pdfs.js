
import pdfs from '../models/mongo/pdfs.js'
import { Notebooks_ } from './notebooks.js'
import { Publciations_ } from './publications.js'

export class PDFS_ {
    
    constructor() {
        this.notebooks_ = new Notebooks_();
        this.publications_ = new Publciations_();
    }


    async find({match, page = 1, limit = 20, sort = 1}) {
        try {
            const skip = Math.abs(page - 1 ) * limit;
            const allPDFs = await pdfs.aggregate([
                // { $match: {}},
                { $sort: {
                    customId: Number(sort)
                }},
                { $skip: Number(skip) },
                { $limit: Number(limit) },
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
                },
            ]);
            
            return allPDFs.map(element => {
                element.newSRCPDFThumbnail = element.newSRCPDFThumbnail.replace('/thumbs/pdfs/', '/');
                element.newSRCPDF = element.newSRCPDF.replace('/pdfs/', '/bigPdf/').replace('.pdf', '_.jpg');
                return element
            })

        } catch (error) {
            console.log('Error find - queries ', error);
            return error;
        }
    }

    async findByNewId(id) {
        try {
            const pdf = await pdfs.findOne({
                isNewId: id
            }).populate('notebook').populate('publication')

            if(pdf){
                pdf.newSRCPDFThumbnail = pdf?.newSRCPDFThumbnail.replace('/thumbs/pdfs/', '/');
                pdf.newSRCPDF = pdf?.newSRCPDF.replace('/pdfs/', '/bigPdf/').replace('.pdf', '_.jpg');
            }

            return  pdf ?? null;
            
        } catch (error) {
            console.log('Error find by new ID - queries ', error);
            return error;
        }
    }
}


