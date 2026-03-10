import { useState } from "react";
import axios from "axios";
const Insert = () => {
    const [input, setInput]=useState({});
    const [images,setInages]=useState([]);
    const handleImage=(e)=>{
        setInages(e.target.files);
    }
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=async()=>{
        const formData=new FormData();
        for(let key in input){
            formData.append(key,input[key]);
        }
        for(let i=0;i<images.length;i++){
            formData.append('images',images[i]);
        }
        let api="http://localhost:9000/student/studata";
        const response=await axios.post(api, formData);
        console.log(response.data);
    }
    // const [myimage, setMyimage] = useState([])
    // const [input, setInput] = useState({})
    // const handleInput = (e) => {
    //     let name = e.target.name;
    //     let value = e.target.value;
    //     setInput(values => ({ ...values, [name]: value }))
    // }
    // const handleImage = (e) => {
    //     console.log(e.target.files[0]);
    //     setMyimage(e.target.files[0]);
    // }
    // const handleSubmit = async () => {
    //     let api = "http://localhost:9000/student/upload";
    //     const formData = new FormData();
    //     formData.append("file", myimage);
    //     formData.append('upload_preset', 'multer')
    //     formData.append('cloud_name', 'dinqyeur3')
    //     const response = await axios.post('https://api.cloudinary.com/v1_1/dinqyeur3/image/upload', formData);
    //     console.log(response.data.url);
    //     let myimg = response.data.url;
    //     const res1 = await axios.post(api, { ...input, myimg: myimg })
    //     console.log(res1);
    // }
    return (
        <>
            <h1>Insert Data With multer</h1>
            Enter Roll Number:<input type="text" name="rollno" onChange={handleInput} />
            <br />
            Enetr Name:<input type="text" name="name" onChange={handleInput} />
            <br />
            Enter City:<input type="text" name="city" onChange={handleInput} />
            <br />
            File Upload:<input type="file" multiple onChange={handleImage} />
            <br />
            <button onClick={handleSubmit}>Save</button>
        </>
    )
}
export default Insert;