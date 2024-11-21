const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/admins').then(() => {
    console.log("connected db..");
}).catch((err) => {
    console.log("err");
})

module.exports = mongoose;

// mongodb://localhost:27017