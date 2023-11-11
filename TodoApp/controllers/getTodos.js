const Todo=require("../models/todomodel");


//define route handle similar to event listner for ease

exports.getTodos=async(req,res)=>{
    try{
       const todos=await Todo.find({});

       res.status(200).json({
        success:true,
        data:todos,
        message:"Aagaya bhai sab database se",

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

exports.getTodosById=async(req,res)=>{
    try{

        const id=req.params.id;
       const todo=await Todo.findById({_id:id})
       if(!todo){
        res.status(404).json({
            success:false,
            data:todo,
            message:"hai nhi bhai",
    
           });
    
        
       }
       else{
       res.status(200).json({
        success:true,
        data:todo,
        message:"Aagaya bhai sab database se",

       });
    }
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