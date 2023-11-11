const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
    mongoose.connect(process.env.mongourl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB SUCCESSFULL");
    })
    .catch((error)=>{
        console.log("NHI HUA BHAI");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;
