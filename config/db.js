const mongoose = require('mongoose');

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connext to MongoDB Database ${mongoose.connection.host}`);
    }catch(error){
        console.log(`Mongodb Error ${error}`.bgRed.white);
    }
};
module.exports = connectDB;