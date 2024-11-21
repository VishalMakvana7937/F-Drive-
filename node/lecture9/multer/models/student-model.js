const mongoose=require('mongoose');

const studentschema = new mongoose.Schema({
    fname:String,
    number:Number,
    email:String,
    avatar: String
})

const studentmodel=mongoose.model('stdcollection',studentschema);

module.exports=studentmodel;