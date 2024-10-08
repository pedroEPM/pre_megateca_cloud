import mongoose from 'mongoose'

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(process.env.MONGO_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    //   useCreateIndex: true
    })

    console.log('DB Online')
  } catch (error) {
    console.log(error)
    throw new Error('Error en la base de datos - Hable con el admin')
  }
}
export default dbConnection
