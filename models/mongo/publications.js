import pkg from 'mongoose'
const { Schema, model } = pkg

const publicationSchema = Schema({
    idMegamedia: {type: String},
    publicationName: { type: String, required: [true, 'se requiere un nombre']},
    status : { type : Boolean},
    vigente: {type: Boolean}, // infromacion de megamedia
   
    icon: { type: String },
   
    XML: { type: String, },
    orden: {type: Number}, // infromacion de megamedia
    grupo: {type: Number}, // infromacion de megamedia
    iconogrande: {type: String}, // infromacion de megamedia
    minDate: {type: Date},
    order : { type : Number },
    group: { type: Number },
    isDeleted: {
        type: Boolean
    }

})
export default model('Publications', publicationSchema)
