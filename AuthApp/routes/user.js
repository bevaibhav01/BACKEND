const express=require('express');
const router=express.Router();

const {login,signup}=require('../controllers/Auth');
const {Auth,isStudent,isAdmin}=require('../middlerwares/Auth');
router.post('/login',login);
router.post('/signup',signup);

//test route
router.get('/test',Auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome user"
    });
})


//protected route for students
router.get('/student',Auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome student"
    });
});

//for admin
router.get('/admin',Auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome admin"
    });
});


module.exports=router;