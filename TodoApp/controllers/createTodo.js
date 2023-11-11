//import modules schema

const Todo=require("../models/todomodel");


//define route handle similar to event listner for ease

exports.createTodo=async(req,res)=>{
    try{
        //extract title and decripton from request body
        const {title,description}=req.body;
        
        //create a new todo obj and insert in DB
        const response=await Todo.create({title,description});

        //send a json response with a succes flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry created '
            }
        )

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