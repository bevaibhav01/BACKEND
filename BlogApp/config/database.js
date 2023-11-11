
//npm i mongoose

const mongoose=require('mongoose');

const dbConnect=()=>{
    mongoose.connect( 'mongodb://127.0.0.1:27017/BlogApp',{
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
