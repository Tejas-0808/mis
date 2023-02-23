import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateDistrict(){
    const [District, setDistrict] = useState({district_id: "" , district_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchDistrict = async() => {
        try{
            const res = await axios.get("http://localhost:3001/district/"+ C_id);
            setDistrict(res.data);
            console.log(District);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDistrict();
    }, []);

    const handleChange = async (e) => {
        setDistrict((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/district/" + C_id, District);
            navigate("/district");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="District ID" name="district_id" value={District.district_id} onChange={handleChange}/>
        <input type="text" placeholder="District Name" name="district_name" value={District.district_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateDistrict;