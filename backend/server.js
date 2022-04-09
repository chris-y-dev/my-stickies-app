const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesURL = require('./routes/routes')

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;


mongoose.connect(process.env.ATLAS_URI, ()=>{
    console.log('MongoDB database connected successfully')
})

app.use(express.json())
app.use(cors());
app.use('/', routesURL)

app.listen(port, function(){
    console.log(`server is running on port: ${port}`);
});