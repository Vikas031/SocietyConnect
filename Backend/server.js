require('dotenv').config();
const express=require('express');
const router=require('./routes');
const DbConnect=require("./database_connect");
var bodyParser = require('body-parser');
let cors = require("cors");

const app=express();
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const PORT=process.env.PORT||5500;
// for database connection 
DbConnect() 

// Add Access Control Allow Origin headers


app.use(router);



app.listen(PORT,()=>{
    console.log('server running')
})