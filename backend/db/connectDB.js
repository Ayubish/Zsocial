import mongoose from "mongoose";

const connectDB = async (URI)=>{
    try{
        const conn = await mongoose.connect(URI);
        console.log(`database connected to ${conn.connection.host}.`);
    }catch(err){
        console.error("Database connection failed:", err);
        process.exit(1);
    }
}

export default connectDB;