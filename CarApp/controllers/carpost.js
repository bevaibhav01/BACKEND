const car=require('../models/car');
const comment=require('../models/comments');
const like=require('../models/like');

exports.createCar=async (req,res)=>{
    try{
     const {name,description,additional}=req.body
     const newCar=await car.create({name,description,additional});

     res.send(newCar);

    }
    catch(e){
     console.log(e);
     
    }

}

exports.fetchCar=async (req,res)=>{
    try{
    const response=await car.find({});
    res.send(response);
    }catch(e){
        res.send(e);
    }
}