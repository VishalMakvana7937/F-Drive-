import mongoose from  'mongoose';
import dotenv  from 'dotenv';
dotenv.config();

mongoose.connect(`${process.env.DB_URL}/myschool`).then(()=>{
    console.log("connected db..");
}).catch((err)=>{
    console.log("err");
})

export default mongoose;