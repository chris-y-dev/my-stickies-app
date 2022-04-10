const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesURL = require('./routes/routes');
const path = require('path')

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.ATLAS_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(console.log('MongoDB database connected successfully'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'));
    app.get('*', (req,res)=>{
        req.sendFile(path.resolve(__dirname, 'public', 'index.html'))
    })
}



app.use(express.json())
app.use(cors());
app.use('/', routesURL)

app.listen(port, function(){
    console.log(`server is running on port: ${port}`);
});