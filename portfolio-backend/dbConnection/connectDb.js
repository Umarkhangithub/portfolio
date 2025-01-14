import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const connectDB = async (DATABASE_URL) =>{
    try {
      const conn =  await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
        return conn

    } catch (error) {
        // console.log(`Error: ${error.message}`.red.underline.bold)
        // process.exit(1)
        console.log(' not connected',error.message)
    }


    
}




export default connectDB;

