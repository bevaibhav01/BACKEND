const Blog=require('../models/blog');

exports.createBlog=async (req,res)=>{

    try{
  const {title,body}=req.body;

  const createdBlog=await Blog.create({title,body});

   res.send(createdBlog);
    }
    catch(err){

    }



}

exports.fetchBlog=async (req,res)=>{
try{
    const blogs=await Blog.find({}).populate('Comment').exec();

    res.send(blogs);


}
catch(e){

}


}