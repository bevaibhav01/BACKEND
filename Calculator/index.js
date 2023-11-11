const express=require("express");
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))

//app.use(express.json());
app.get('/',(req,res)=>{
   res.sendFile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    //it is in string form convert it to number();
    var a=req.body.num1;
    var b=req.body.num2;

    res.send(a+b);
})

app.listen(3000);