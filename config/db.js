const mongoose = require('mongoose');

const connectDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
    }catch(error){
        console.log(`Mongodb Error ${error}`.bgRed.white);
    }
};
module.exports = connectDB;