const mongoose=require('mongoose');

const likeSchema=mongoose.Schema({
    car:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Car'
    },
    user:{
        type:String,
        required:true,
    }

});

module.exports=mongoose.model("Like",likeSchema);