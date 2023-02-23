import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateBos(){
    const [Bos, setBos] = useState({bos_id: "" , bos_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchBos = async() => {
        try{
            const res = await axios.get("http://localhost:3001/b_o_s/"+ C_id);
            setBos(res.data);
            console.log(Bos);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchBos();
    }, []);

    const handleChange = async (e) => {
        setBos((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/b_o_s/" + C_id, Bos);
            navigate("/bos");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="BOS ID" name="bos_id" value={Bos.bos_id} onChange={handleChange}/>
        <input type="text" placeholder="BOS Name" name="bos_name" value={Bos.bos_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateBos;