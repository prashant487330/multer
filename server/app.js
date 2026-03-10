const express=require("express");
const mongoose=require("mongoose");
const app=express();
const cors=require("cors");
app.use(cors());
const bodyparser=require("body-parser");
const StuRoute=require("./routes/stuRoute");

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

// mongoose.connect("mongodb://127.0.0.1:27017/multer").then(()=>{
//     console.log("Database connected successfully")
// })

app.use("/student",StuRoute);

app.listen(9000,()=>{
    console.log("server run on 9000 port")
})