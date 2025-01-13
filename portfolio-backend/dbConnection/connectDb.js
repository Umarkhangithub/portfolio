import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const connectDB = async (DATABASE_URL) =>{
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');

    } catch (error) {
        // console.log(`Error: ${error.message}`.red.underline.bold)
        // process.exit(1)
        console.log(' not connected',error)
    }


    
}
export default connectDB;
// import mongoose from 'mongoose';

// const connectDB = async (DATABASE_URL) => {
//     try {
//         await mongoose.connect(DATABASE_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.error('Database connection error:', error);
//         process.exit(1); // Exit process with failure
//     }
// };

// export default connectDB;
