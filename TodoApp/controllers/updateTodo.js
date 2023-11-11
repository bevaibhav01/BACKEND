const Todo=require("../models/todomodel");


//define route handle similar to event listner for ease

exports.updateTodo=async (req,res)=>{
    try{
      const {id}=req.params;
      const {title,description}=req.body;
      //await keyword is importants
      const todo=await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updatedAt:Date.now()},
        );

        res.status(200).json({
            success:true,
            data:todo,
            message:"hogaya bhai update",
        });
      



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