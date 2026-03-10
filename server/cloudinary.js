const cloudinary=require('cloudinary').v2;
cloudinary.config({
    cloud_name:'dinqyeur3',
    api_key:'651533259949136',
    api_secret:'4P9LrbRLHbFaVzUSpsYx6eoJTmA'
    
});
module.exports=cloudinary;