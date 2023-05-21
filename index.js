import express from 'express';
const app = express();
const port = 8000;

app.listen(port, function (error) {
   if(error){
    console.log(`Error is Setting Up the Server : ${error}`);
   } 
   console.log(`Server is Up and Running on Port : ${port}`);
});
