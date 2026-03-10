// import axios from "axios";
// import { useState,useEffect } from "react";
const Display=()=>{
    // const [mydata,setMydata]=useState([]);
    // const loadData=async()=>{
    //     let api="http://localhost:9000/student/display";
    //     const response=await axios.get(api);
    //     console.log(response.data);
    //     setMydata(response.data);
    // }
    // useEffect(()=>{
    //     loadData();
    // },[])

    // const ans=mydata.map((key)=>{
    //     return(
    //         <>
    //         <tr>
    //             <td>{key.rollno}</td>
    //             <td>{key.name}</td>
    //             <td>{key.city}</td>
    //             <td>{<img src={key.myimg} height={50} width={50}/>}</td>
    //         </tr>
    //         </>
    //     )
    // })
    return(
        <>
        <h1>Welcome to Dispaly Page</h1>
        {/* <hr />
        <table border={5}>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>City</th>
                <th>Myimage</th>
            </tr>
            {ans}
        </table>         */}
        </>
    )
}
export default Display;