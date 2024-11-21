import mongoose from 'mongoose';

const studentschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }

})

const studentmodel = mongoose.model('student', studentschema);

export default studentmodel;

