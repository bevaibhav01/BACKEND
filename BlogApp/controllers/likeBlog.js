const Blog=require('../models/blog');
const Like=require('../models/like');

exports.likeBlog=async (req,res)=>{
    try{
        const {blog,user}=req.body;

        const savedLike=await Like.create({blog,user});

        const updatedBlog=await Blog.findByIdAndUpdate(blog,{$push:{like:savedLike._id}},{new:true});

        res.json({
            blog:updatedBlog,
        })

    }
    catch(e){

    }
}

exports.unlineBlog=async (req,res)=>{
  try{
    const {blog,like}=req.body;

    const newLike=await Like.findByIdAndDelete(like);
    const newPost=await Blog.findByIdAndUpdate(blog,{$pull:{like:newLike._id}},{new:true});

    res.json({
        blog:newPost,
    })

  }
  catch(e){

  }
}