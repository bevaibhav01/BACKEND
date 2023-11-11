const express=require('express');
//const dbConnect = require('./config/database');
const app=express();

require('dotenv').config();
const PORT=process.env.PORT||4000;

const cookirparser=require('cookie-parser');
app.use(cookirparser());


app.use(express.json());

const dbConnect=require('./config/database');
dbConnect();

const user=require('./routes/user');
app.use('/',user);

app.listen(3000,()=>{
    console.log('App is succesfully running');
})

app.get('/',(req,res)=>{
    res.send('<h1>Hello jii</h1>')
})