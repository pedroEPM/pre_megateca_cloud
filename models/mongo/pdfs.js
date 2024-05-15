import pkg from 'mongoose'
const { Schema, model } = pkg

const pdfscSchema = Schema({
    idMegamedia: { type: String, unique: [true, 'Se require un ID megamedia'] },
    publication: { type: Schema.Types.ObjectId, ref: 'Publications' },
    notebook: { type: Schema.Types.ObjectId, ref: 'NoteBooks' },
    section: { type: Schema.Types.ObjectId, ref: 'Section' },
    idNoticia: { type: String },
    idNoticeMegamedia: { type: String },
    clasificationRef: { type: Schema.Types.ObjectId, ref: 'Clasifications' },
    title: { type: String },
    descriptio: { type: String },
    page: { type: Number },
    datePublication: { type: Date, default: new Date() },
    dateCreation: { type: Date, default: new Date() },
    lastEditionDate: { type: Date },
    status: { type: Boolean },
    folder: { type: String },
    imageSrc: { type: String },
    imageSrcThumb: { type: String },
    
    dateStringInfo: { type: String },
    place: { type: String },
    observations: { type: String },
    // agency: { type: Schema.Types.ObjectId, ref: 'Agencies' },
    agency: { type: String },
    downloads: { type: Number },
    isSelleable: { type: Boolean },
    isPublished: { type: Boolean },
    isYearbook: { type: Boolean },
    catalogingInstitution: { type: String },
    periodicity: { type: String },
    language: { type: String },
    imprint: { type: String },
    director: { type: String },
    localSeries: { type: String },
    


    isNewId: { type: String },
    
    customId: { type: Number },
    customIdReverse: { type: Number },
    newSRCPDF: {type: String},
    newSRCPDFThumbnail: {type: String},

    
    editDate: {
        type: Date
    },
    isDeleted: {
        type: Boolean
    }

})
export default model('pdfs', pdfscSchema)
