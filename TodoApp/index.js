//CREATING INSTANCE OF THE SERVER
const express=require("express");
const app=express();

//load config from env file
//CONVERTING PORT URL INTO PROCESS FORMAT
require("dotenv").config();
const port=process.env.PORT||3000;

//middleware to parse json object body
//NEED WHEN TO WANT O TRANSFER SOMETHING FROM BODY OF REQUEST
app.use(express.json());

//import todos routes
const todoRoutes=require("./routes/todos");

//mount the todo API routes
app.use("/api/v1",todoRoutes);

//start server
app.listen(port,()=>{
    console.log(`TO CHALIYE SHURU KRTE HAI ${port}`);
});

//connect to db

//import db
const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send("<h1>Haa bhai Todo App</h1>");
})


