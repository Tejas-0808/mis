import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";


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

    return (<Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="form">
        <h1>EDIT CITY</h1>
            <hr></hr>
            <br></br>
            <TextField
          required
          type="number"
          variant="outlined"
          label="City ID"
          name="city_id"
          value={City.city_id}
          onChange={handleChange}
        />
      <TextField
          required
          variant="outlined"
          name="city_name"
          label="City Name"
          value={City.city_name}
          onChange={handleChange}
        />
      <TextField
          required
          variant="outlined"
          name="isDistrict"
          label="Is District"
          value={City.isDistrict}
          onChange={handleChange}
        />
      <TextField
          required
          type="number"
          variant="outlined"
          label="State ID"
          name="state_id"
          value={City.state_id}
          onChange={handleChange}/>
        
        <Button variant="contained" onClick={handleEdit}>Submit</Button>
    </div>
    </Box>)
}

export default UpdateCity;