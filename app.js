const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const phoneRoutes = require('./routes/phoneroutes'); 
const laptopRoutes = require('./routes/laptoproutes'); 

const app=express();  // initialize server 

app.use(bodyParser.json()); // how data will be appened when it reaches the server


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


app.use('/phones', phoneRoutes); 
app.use('/laptops', laptopRoutes); 

app.use((error,req,res,next) =>{
    console.log(error);
    const status= error.code || 500;  //sets default value to 500
    const message = error.message;
    res.status(status).json({message:message}); 
});

  mongoose.connect('mongodb://127.0.0.1/SHOP').then(result =>{
    app.listen(2255);
    console.log('Conected to database.'); 
}).catch(err => console.log(err));   

