const mongoose=require('mongoose')

const likeSchema=mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog" //ref to blog item
    },
    user:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("Like",likeSchema);