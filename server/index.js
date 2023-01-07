const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('../middleware/errorMiddleware');
const connectDB = require('../config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/booking', require('../routes/bookingRoutes'));

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.get("/", (req,res) => {

})

app.listen(port, () => {console.log(`Server is running on port ${port}`)});