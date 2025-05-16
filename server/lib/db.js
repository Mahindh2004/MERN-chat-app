import mongoose from "mongoose";
export const connectDB = async ()=>{
    try{
       mongoose.connection.on('connected',()=>console.log('Database Connected'));
       await mongoose.connect("mongodb+srv://mahindh:mahindh2004@cluster0.ho3jdrf.mongodb.net")
    } catch(error){
       console.log(error);
    }
}