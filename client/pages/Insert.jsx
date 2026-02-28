import { useState } from "react";
import axios from "axios";
const Insert = () => {
    const [myimage, setMyimage] = useState(null)
    const [input, setInput] = useState({})
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }
    const handleImage = (e) => {
        console.log(e.target.files[0]);
        setMyimage(e.target.files[0]);
    }
    const handleSubmit = async () => {
        let api = "http://localhost:9000/student/upload";
        const formData = new FormData();
        formData.append("file", myimage);
        formData.append('upload_preset', 'multer')
        formData.append('cloud_name', 'dinqyeur3')
        const response = await axios.post('https://api.cloudinary.com/v1_1/dinqyeur3/image/upload', formData);
        console.log(response.data.url);
        let myimg = response.data.url;
        const res1 = await axios.post(api, { ...input, myimg: myimg })
        console.log(res1);
    }
    return (
        <>
            <h1>Insert Data</h1>
            Enter Roll Number:<input type="text" name="rollno" onChange={handleInput} />
            <br />
            Enetr Name:<input type="text" name="name" onChange={handleInput} />
            <br />
            Enter City:<input type="text" name="city" onChange={handleInput} />
            <br />
            File Upload:<input type="file" onChange={handleImage} />
            <br />
            <button onClick={handleSubmit}>Save</button>
        </>
    )
}
export default Insert;
// import { useState } from "react";
// import axios from "axios";
// const Insert = () => {
//     const [myimage, setMyimage] = useState(null);
//     const [input, setInput] = useState({});

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setInput(prev => ({ ...prev, [name]: value }));
//     };

//     const handleImage = (e) => {
//         setMyimage(e.target.files[0]);
//     };

//     const handleSubmit = async () => {

//         if (!myimage) {
//             alert("Please select an image");
//             return;
//         }

//         try {
//             const api = "http://localhost:9000/student/upload";

//             const formData = new FormData();
//             formData.append("file", myimage);
//             formData.append("upload_preset", "multer");
//             formData.append("cloud_name", "dinqyeur3");

//             const response = await axios.post(
//                 "https://api.cloudinary.com/v1_1/dinqyeur3/image/upload",
//                 formData
//             );

//             const myimg = response.data.secure_url;

//             const res1 = await axios.post(api, { ...input, myimg });

//             console.log(res1.data);
//             alert("Data inserted successfully");

//         } catch (error) {
//             console.error(error);
//             alert("Upload failed");
//         }
//     };

//     return (
//         <>
//             <h1>Insert Data</h1>

//             Enter Roll Number:
//             <input type="text" name="rollno" onChange={handleInput} />
//             <br />

//             Enter Name:
//             <input type="text" name="name" onChange={handleInput} />
//             <br />

//             Enter City:
//             <input type="text" name="city" onChange={handleInput} />
//             <br />

//             File Upload:
//             <input type="file" accept="image/*" onChange={handleImage} />
//             <br />

//             <button onClick={handleSubmit}>Save</button>
//         </>
//     );
// };

// export default Insert;