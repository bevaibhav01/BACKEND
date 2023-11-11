//initialising server
//npm init -y
//npm i express
//npm i nodemon
const express=require('express');
const app=express();

app.use(express.json());

app.listen(3000,()=>{
    console.log("chal gaya bhai");
});

app.get('/',(req,res)=>{
    res.send('<h1>Hii there</h1>');
});

const dbConnect=require('./config/database');
dbConnect();

const routescar=require('./routes/carroutes');

app.use("/",routescar);

