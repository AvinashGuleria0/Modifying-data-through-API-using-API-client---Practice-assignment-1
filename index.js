const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const mongoose = require('mongoose'); 
const data = require('./menuItem');
const connectToDb = require('./db');
const menuRoute = require('./menu')
const app = express();
const port = process.env.PORT || 9000;
const DB_Url = process.env.DB_URL;

app.use(express.static('static'));
app.use(express.json())


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/menu', menuRoute)



app.listen(port, async() => {
  try{
    await connectToDb(DB_Url);
    console.log(`Example app listening at http://localhost:${port}`);
    console.log(`connected to Database`);
  }catch(err){
    console.log(err);
  }
});
