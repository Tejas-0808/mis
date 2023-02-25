import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


function UpdateCity(){
    const [City, setCity] = useState({city_id: "" , city_name: "", isDistrict: "" , state_id: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCity = async() => {
        try{
            const res = await axios.get("http://localhost:3001/city/"+ C_id);
            setCity(res.data);
            console.log(City);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCity();
    }, []);

    const handleChange = async (e) => {
        setCity((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/city/" + C_id, City);
            navigate("/city");
        }catch(err){
            console.log(err);
        }
        
    }

    return (<div className='edit_form'>
        <h2>EDIT</h2>
        <input type="number" placeholder="City ID" name="city_id" value={City.city_id} onChange={handleChange}/>
        <input type="text" placeholder="City Name" name="city_name" value={City.city_name} onChange={handleChange}/>
        <input type="text" placeholder="District" name="isDistrict" value={City.isDistrict} onChange={handleChange}/>
        <input type="number" placeholder="State Id" name="state_id" value={City.state_id} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button>
    </div>)
}

export default UpdateCity;