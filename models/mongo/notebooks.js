import pkg from 'mongoose'
const { Schema, model } = pkg

const notebookSchema = Schema({
    idMegamedia: { type: String },
    NoteBookName: { type: String, /*required: [true, 'se requiere un nombre']*/ },
    PublicationReference: { type: Schema.Types.ObjectId, ref: 'Publications' },
    status: {type: Boolean}, // infromacion de megamedia
    vigente: {type: Boolean}, // infromacion de megamedia
    
    icon: { type: String },
    
    orden: {type: Number}, // infromacion de megamedia
    grupo: {type: Number}, // infromacion de megamedia
    iconogrande: {type: String}, // infromacion de megamedia
    status : { type : Boolean},
    type : { type : String },
    //type : { type : String, required : [ true, 'Tiene que tener Suplemento o Sección'] },
    order : { type : Number },
    newSort: { type: Number },
    abbreviation: { type: String },
    isDeleted: {type: Boolean}

})
export default model('NoteBooks', notebookSchema)
