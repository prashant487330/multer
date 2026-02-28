const express=require("express");
const route=express.Router();
const StuController=require("../controllers/stuController");
// const multer=require("multer");

// // Multer storage Configuration
// const storage=multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'uploads/');//save file to uploads directory
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname);//keep original file name
//     }
// });
// const upload=multer({storage:storage});

// route.post("/upload",upload.single("myimage"),StuController.myUpload);

route.post("/upload",StuController.stuUpload)
route.get("/display",StuController.stuDisplay)

module.exports=route;