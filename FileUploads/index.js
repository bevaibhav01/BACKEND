const express=require('express');
const app=express();

app.listen(3000,(req,res)=>{
    console.log('hogaya bhai listen');
});

app.get('/',(req,res)=>{
    res.send('<h1>Hello jii keso ho saare</h1>')
})
//middleware for json
app.use(express.json());

//fileupload middleware
//to upload on server
const fileUpload=require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


//dbconnection
const dbConnect=require('./config/dbConnection');
dbConnect();

//upload on cloud
const cloudinary=require('./config/coludinary');
cloudinary.cloudinaryConnect();

const routes=require('./routes/FilesRoutes');
app.use('/',routes);

