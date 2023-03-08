import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateMasterscheme(){
    const [Masterscheme, setMasterscheme] = useState({mastersch_id: "" , master_scheme: "", from_year: "" , to_year: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchMasterscheme = async() => {
        try{
            const res = await axios.get("http://localhost:3001/masterscheme/"+ C_id);
            setMasterscheme(res.data);
            console.log(Masterscheme);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchMasterscheme();
    }, []);

    const handleChange = async (e) => {
        setMasterscheme((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/masterscheme/" + C_id, Masterscheme);
            navigate("/masterscheme");
        }catch(err){
            console.log(err);
        }
        
    }
    console.log(Masterscheme);
    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="Masterscheme ID" name="mastersch_id" value={Masterscheme.mastersch_id} onChange={handleChange}/>
        <input type="text" placeholder="Masterscheme Name" name="master_scheme" value={Masterscheme.master_scheme} onChange={handleChange}/>
        <input type="number" placeholder="From_Year" name="from_year" value={Masterscheme.from_year} onChange={handleChange}/>
        <input type="number" placeholder="To_year" name="to_year" value={Masterscheme.to_year} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateMasterscheme;