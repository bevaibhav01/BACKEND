
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.Auth=(req,res,next)=>{
    try{
        //extract jwt
        console.log(req.cookies.token);
        console.log(req.body.token);
        
        const token=req.cookies.token||req.body.token||req.header("Authorization").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                succes:false,
                message:'token not found'
            });
        }
       try{
        const payload=jwt.verify(token,process.env.jwt_secret);
        console.log(payload);
        req.user=payload;

       }catch(e){
        return res.status(401).json({
            success:false,
            message:"wrong token"
        })

       }

       next();

    }catch(e){
        return res.status(401).json({
            success:false,
            message:"wrong hogaya bhai kuch to"
        })

    }
}

exports.isStudent=(req,res,next)=>{
    try{
    if(req.user.role!=='student'){
        return res.status(401).json({
            success:false,
            message:'only student'
        })
    }
    next();
}catch(e){
    return res.status(500).json({
        success:false,
        message:'mistake hogaya hai kuch to'
    })
}
}

exports.isAdmin=(req,res,next)=>{
    try{
    if(req.user.role!=='admin'){
        return res.status(401).json({
            success:false,
            message:'only admin'
        })
    }
    next();
}catch(e){
    return res.status(500).json({
        success:false,
        message:'mistake hogaya hai kuch to'
    })
}
}

