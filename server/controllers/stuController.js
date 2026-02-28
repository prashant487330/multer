const stuModel=require("../models/stuModel");

const stuUpload=async(req,res)=>{
   const{rollno,name,city,myimg}=req.body;
   const Student=await stuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        myimg:myimg
   })
   res.send("student record successfully insertrd....")
}
const stuDisplay=async(req,res)=>{
     const Student= await stuModel.find();
     res.send(Student);
}

module.exports={
    stuUpload,
    stuDisplay
}