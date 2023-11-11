const express=require('express');
const router=express.Router();

const {createComment}=require('../controllers/commentBlog');
const {createBlog,fetchBlog}=require('../controllers/createBlog');
const { likeBlog,unlineBlog } = require('../controllers/likeBlog');


router.post("/comment/create",createComment);

router.post("/create/blog",createBlog);

router.get("/getBlogs",fetchBlog);

router.post("/likeBlog",likeBlog);

router.post("/unlikeBlog",unlineBlog);



module.exports=router;