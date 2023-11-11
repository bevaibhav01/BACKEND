const mongoose=require('mongoose')

const commentSchema=mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog" //ref to blog item
    },
    body:{
        type:String,
        maxLength:200,
    },
    user:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("comments",commentSchema);