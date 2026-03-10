const multer=require('multer');
const {CloudinaryStorage}=require('multer-storage-cloudinary');
const cloudinary=require("../cloudinary");
const storage=new CloudinaryStorage({
     cloudinary:cloudinary,
     params:{
          folder:'Product_images',
          format:async(req,file)=>'jpg',
          public_id:(req,file)=>Date.now()+'-'+file.originalname,
     },
});
const upload=multer({storage:storage}).array('images',10);
const studata=async(req,res)=>{
     upload(req,res,async(err)=>{
          if(err){
               return res.status(500).send("Error uploading files:"+err.message);
          }
          try{
               console.log(req.body);
               res.status(200).send("Data Save Successfully");
          }catch(error){
               res.status(500).send("Error Saving data"+error.message);
          }
     });
}
//const stuModel=require("../models/stuModel");
// const stuUpload=async(req,res)=>{
//    const{rollno,name,city,myimg}=req.body;
//    const Student=await stuModel.create({
//         rollno:rollno,
//         name:name,
//         city:city,
//         myimg:myimg
//    })
//    res.send("student record successfully insertrd....")
// }
// const stuDisplay=async(req,res)=>{
//      const Student= await stuModel.find();
//      res.send(Student);
// }

module.exports={
    studata
}