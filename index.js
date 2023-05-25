const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const db = require('./config/mongoose');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./assets'));
app.use('/', require('./routes'));

app.listen(port, function (error) {
   if(error){
    console.log(`Error is Setting Up the Server : ${error}`);
   } 
   console.log(`Server is Up and Running on Port : ${port}`);
});
