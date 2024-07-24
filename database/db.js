import mongoose from 'mongoose';

const Connection = async(URL) =>{
    
    try {
        await mongoose.connect(URL);

       console.log("Database connected Successfully");
    } catch (error) {
        console.log(`Error while connecting with the database`, error);
    }
}

export default Connection;