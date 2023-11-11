const File=require('../models/fileModel');
const cloudinary=require('cloudinary').v2;

exports.localUpload=async (req,res)=>{

    try{
        const file=req.files.file;
        console.log(file);

        let path=__dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`;
        console.log("path",path);

        file.mv(path,(err)=>{
            console.log(err);
        })

        res.json({
            succes:true,
            message:"File upload hogaya server pr"
        })

    }catch(erre){

        console.log(erre);

    }

}

function check(type,supported){
    return supported.includes(type);
}

async function fileUpload(file,folder){
    const options={folder};
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload=async (req,res)=>{
  try{
    const {name,tags,email}=req.body;
    console.log(name,tags,email);

    const file=req.files.file;
    console.log(file);

    const supported=["jpg","jpeg","png"];
    const type = file.name.split('.').pop().toLowerCase();

    console.log(type);

    if(check(type,supported)){
        console.log("iam running");
        const response=await fileUpload(file,"vaibhav");
        console.log(response);
        const fileCreate=await File.create({name,tags,email,imageUrl:response.secure_url});
         res.json({
            message:'Hogaya bhai kaam',
            success:true

        });

    }else{
        console.log("iam running1");
        return res.status(400).json({
            succes:false,
            message:"Gad bad hogaye"
        });
    }



  }catch(e){
    console.log("iam running2");
    return res.status(500).json({
        succes:false,
        message:"Gad bad hogaye re bhai"
    });




  }


}