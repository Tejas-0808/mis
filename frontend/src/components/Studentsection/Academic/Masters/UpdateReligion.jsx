import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateReligion(){
    const [Religion, setReligion] = useState({religion_id: "" ,Religion_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchReligion = async() => {
        try{
            const res = await axios.get("http://localhost:3001/religion/"+ C_id);
            setReligion(res.data);
            console.log(Religion);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchReligion();
    }, []);

    const handleChange = async (e) => {
        setReligion((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/religion/" + C_id, Religion);
            navigate("/religion");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="Religion ID" name="religion_id" value={Religion.religion_id} onChange={handleChange}/>
        <input type="text" placeholder="Religion Name" name="Religion_name" value={Religion.Religion_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateReligion;