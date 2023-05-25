// import express and set up the server
const express = require('express');
const app = express();
const port = 8000; // default port
const bodyParser = require('body-parser'); // body-parser for string to object conversion
const db = require('./config/mongoose'); // connecting the database

app.set('view engine', 'ejs'); // setting up the view engine (EJS)
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./assets')); // setting up the Static Files
app.use('/', require('./routes')); // setting up the router

// Starting the express server 
app.listen(port, function (error) {
   if(error){
    console.log(`Error is Setting Up the Server : ${error}`);
   } 
   console.log(`Server is Up and Running on Port : ${port}`);
});
