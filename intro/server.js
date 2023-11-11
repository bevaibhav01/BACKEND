// step1 create a folder 
// step2 move into that folder or directory 
// step3 npm init -y 
// step4 open folder using vs code 
// step 5 npm i express 
// step 6 create server.js

//CREATING INSTANCE OF THE SERVER
const express=require('express');
const app=express();

//body parser object
const bodyParser=require('body-parser');

//SPECIFICALLY PARSE JSON DATA AND ADD TO THE REQUEST.BODY OBJECT
app.use(bodyParser.json());

//ACTIVATING SERVER AT PORT NO 3000
app.listen(5000,()=>{
    console.log("server start at port no. 3000");
});


//SETTING ROUTES GET AND POST
app.get('/',(req,res)=>{
    res.send("kuch samaj nhi aara");
})

app.post('/api/cars',(req,res)=>{
const {name,brand}=req.body;
console.log(name);
console.log(brand);
res.send("hogaya bhai post");
})

//npm i mongoose run to connect db with express

const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myData',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("hogaya db connect")})
.catch((error)=>{"nhi hua bhai db ka kaam"});







