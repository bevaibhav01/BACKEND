const mongoose=require('mongoose');

const carSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:100
    },
    description:{
        type:String,
        required:true,
        maxLength:100
    },
    additional:{
        type:String,
        required:true,
        maxLength:100
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
      }],
   
   
      Comment:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"comments"
      }]
});

module.exports=mongoose.model('Car',carSchema);

