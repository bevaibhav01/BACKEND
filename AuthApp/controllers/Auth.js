const userSchema=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.signup=async (req,res)=>{
    try{

    const {name,email,password,role}=req.body;

    const existUser=await userSchema.findOne({email});

    if (existUser !== null) {
        return res.status(400).json({
            success: false,
            message: 'User already exists'
        });
    }
    
    let hashedpass;
      try{
        hashedpass=await bcrypt.hash(password,10);

      }
      catch(e){
        return res.status(500);

      }

        const createUser=await userSchema.create({name,email,password:hashedpass,role});
        return res.status(200).json({
            succes:true,
            message:'welcome user'
        })

    }
    catch(e){
        console.log(e);
        return res.status(500).json({
            succes:false,
            message:'baadme phir prayas kare'
        })

    }
        
   
}

exports.login=async (req,res)=>{
    try{

        const {email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                succes:false,
                message:"Enter the credentials properly",
            })
        }

        let user=await userSchema.findOne({email});

        if(!user){
            return res.status(401).json({
                succes:false,
                message:"User does not exist please sign up",
            })

        }
        const payload={
            name:user.name,
            id:user._id,
            role:user.role,
        };
        
        if(await bcrypt.compare(password,user.password)){
            let token=jwt.sign(payload,process.env.jwt_secret,{
                expiresIn:"2h"
            });
            user=user.toObject();
            user.token=token;
            user.password=undefined;
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,


            }

            return res.cookie('token',token,options).status(200).json({
                succes:true,
                token,
                user,
                message:'logged in succesfully'
            })



        }
        else{
            return res.status(403).json({
                succes:false,
                message:"incorrect password",
            })

        }



    }
    catch(e){

        return res.status(500).json({
            succes:false,
            message:'login fail',
            
        })

    }
}
