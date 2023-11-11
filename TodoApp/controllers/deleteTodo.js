const Todo=require("../models/todomodel");


//define route handle similar to event listner for ease

exports.deleteTodo=async (req,res)=>{
    try{
     const {id}=req.params;
     //dont forget await
     const todo= await Todo.findByIdAndDelete({_id:id});

     res.status(200).json({
        succes:true,
        data:todo,
        message:"tata by by todo",
     })
      



    }
    catch(err){
        console.error(err);
     console.log(err);
     res.status(500).json(
        {
            success:false,
            data:"error server",
            message:err.message,
        }
     )

    }
}