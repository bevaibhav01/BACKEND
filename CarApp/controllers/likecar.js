const like=require('../models/like');
const car=require('../models/car');

exports.likecars=async (req,res)=>{
    try{
        const {car,user}=req.body;

        const savedLike=await like.create({car,user});

        const updatedcar=await car.findByIdAndUpdate(car,{$push:{like:savedLike._id}},{new:true});

        res.json({
            car:updatedcar,
        })

    }
    catch(e){
       res.send((e));
    }
}