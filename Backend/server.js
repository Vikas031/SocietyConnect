require('dotenv').config();
const express=require('express');
const router=require('./routes');
const DbConnect=require("./database_connect")


const app=express();
const PORT=process.env.PORT||5500;
// for database connection 
DbConnect() 

app.use(router);
app.get('/',(req,res)=>{
    res.send("hello");
});

app.listen(PORT,()=>{
    console.log('server running')
})