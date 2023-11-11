//ste 1 install mongoose npm i mongoose
// start2 install dotenv for process npm i dot env


const mongoose=require('mongoose');


 require("dotenv").config();
 const uri=process.env.DATABASE_URL;


const dbConnect=()=>{
    mongoose.connect( 'mongodb://127.0.0.1:27017/todoData',{
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