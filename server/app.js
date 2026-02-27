const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
const bodyparser=require("body-parser");
const StuRoute=require("./routes/stuRoute");

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/student",StuRoute);

app.listen(9000,()=>{
    console.log("server run on 9000 port")
})