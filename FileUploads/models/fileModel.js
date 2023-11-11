const mongoose=require('mongoose');

const fileSchema=mongoose.Schema({
    name:{
        type:String
    },
    imageUrl:{
        type:String
    },
    tags:{
        type:String
    },
    email:{
        type:String
    }

});

module.exports=mongoose.model('File',fileSchema);


