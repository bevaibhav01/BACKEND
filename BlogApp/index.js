//npm init -y instal node modules
//npm i express install express
//npm i nodemon 

const express=require('express');
const app=express();

app.listen(3000,()=>{
    "chal gaya app"
});


app.use(express.json())

const routesBlog=require('./routes/blog')

app.use("/api/v1",routesBlog);

app.get('/',(req,res)=>{
    res.send("Hii blog app kese ho");
})

const dbConnect=require('./config/database');
dbConnect();
