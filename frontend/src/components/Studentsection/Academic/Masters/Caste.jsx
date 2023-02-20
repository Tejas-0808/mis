import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Caste = () => {

    const  [caste, setCaste] = useState([]);

    const fetchAllCaste = async () => {
        try{
            const res = await axios.get("http://localhost:3001/caste");
            setCaste(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllCaste();
    },[]);

    const navigate = useNavigate();

   

    return (<div>
        <h1>Caste Management</h1>
        <div className='caste'>
        {caste.map((caste) => (
            <div key={caste.caste_id} className="caste">
                <button className='edit'><Link to={`/edit/${caste.caste_id}`}>Edit</Link></button>
                <p>{caste.caste_id}</p>
                <p>{caste.caste_name}</p>
            </div>
        ))}
        </div>
    </div>)
}

export default Caste;