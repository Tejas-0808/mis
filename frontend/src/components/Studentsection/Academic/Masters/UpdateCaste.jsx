import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateCaste(){
    const [Caste, setCaste] = useState({caste_id: "" ,caste_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCaste = async() => {
        try{
            const res = await axios.get("http://localhost:3001/caste/"+ C_id);
            setCaste(res.data);
            console.log(Caste);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCaste();
    }, []);

    const handleChange = async (e) => {
        setCaste((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/caste/" + C_id, Caste);
            navigate("/caste");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="ID" name="caste_id" value={Caste.caste_id} onChange={handleChange}/>
        <input type="text" placeholder="Caste Name" name="caste_name" value={Caste.caste_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateCaste;