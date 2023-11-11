const mongoose=require("mongoose");

const todoSchema=new mongoose.Schema(
  {
    title:{
        type:String,
        required:true,
        maxLength:100,
    },
    description:{
        type:String,
        required:true,
        maxLength:100,
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now(),
    },
    updatedAt:{
        type:Date,
        required:true,
        default:Date.now(),
    }
  }

);

//now anyone a acces it using Todo name;
module.exports=mongoose.model("Todo",todoSchema);