import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Caste = () => {

    const  [caste, setCaste] = useState([]);

    const fetchCaste = async () => {
        try{
            const res = await axios.get("http://localhost:3001/caste");
            setCaste(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCaste();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/caste/"+id)
            const res = await axios.get("http://localhost:3001/caste");
              setCaste(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (<div>
        <h1>Caste Management</h1>
        <div className='caste'>
        {caste.map((caste) => (
            <div key={caste.caste_id} className="caste">
                <p>{caste.caste_id}</p>
                <p>{caste.caste_name}</p>
                {/* <button className='edit'><Link to={`/edit/${caste.caste_id}`}>Edit</Link></button> */}
                <button className='update'><Link to={`/updatecaste/${caste.caste_id}`}>Update</Link></button>
                <button className="delete" onClick={()=>handleDelete(caste.caste_id)}>Delete</button>
            </div>
        ))}
        </div>
        <button className='AddCaste'><Link to='/addcaste'>ADD Caste</Link></button>
    </div>)
}

export default Caste;