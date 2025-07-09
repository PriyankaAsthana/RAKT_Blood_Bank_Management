const express = require('express');
const dotenv = require('dotenv');
const colors =require('colors');
const morgan =require('morgan');
const cors =require('cors');

//dot config
dotenv.config();

//mongodb connection 
const connectDB= require('./config/db');
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

const testRoutes = require('./routes/testRoutes'); 
app.use('/api/v1/test', testRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server running in ${process.env.DEV_MODE} mode on Port ${process.env.PORT}`.bgBlue.white);
});
