const mongoose=require('mongoose');

const blogSchema=mongoose.Schema(
    {
   title:{
    type:String,
    required:true,
    maxLength:100

   },

   body:{
    type:String,
    required:true,
    maxLength:500,
   },

   like:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Like"
   }],


   Comment:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"comments"
   }]

}
    
);

module.exports=mongoose.model("Blog",blogSchema);