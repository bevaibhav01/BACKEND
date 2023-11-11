const Blog=require('../models/blog');
const comments=require('../models/comment');

exports.createComment=async (req,res)=>{
    try{
        
        const {blog,body,user}=req.body;
        
        const Savedcmnt=await comments.create({blog,body,user});
     //  const savedCmnt=await cmnt.save();
      
       const updatedBlog= await Blog.findByIdAndUpdate(blog,{$push:{Comment:Savedcmnt._id}},{new:true}).populate("Comment").exec();
      //  console.log(updatedBlog);
       
      res.json({
        blog:updatedBlog,
      }
      )
    }
    catch(e){
        res.status(500).json({
            success:false,
            data:"error server",
            message:e.message,

        })

    }
}