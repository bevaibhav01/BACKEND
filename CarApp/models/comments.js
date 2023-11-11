const mongoose=require('mongoose');

const commentSchema=mongoose.Schema({
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car'
    },
    comment:{
        type:String,
        required:true,  
    },
    user:{
        type:String,
        required:true,
    }

});

module.exports=mongoose.model("Comment",commentSchema);