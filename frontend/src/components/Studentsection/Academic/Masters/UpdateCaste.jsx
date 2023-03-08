import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



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
   <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
        <h1>UPDATE CASTE</h1>
        <hr></hr>
        <br></br>
      <TextField
          required
         type="number"
          variant="outlined"
          label="Caste ID"
          name="caste_id"
          value={Caste.caste_id}
          onChange={handleChange}
        />

      <TextField
          required
          variant="outlined"
          name="caste_name"
          label="Caste Name"
          value={Caste.caste_name}
          onChange={handleChange}
        />
     
      <Button variant="contained" onClick={handleEdit}>SUBMIT</Button>
      
        {/* <input type="number" placeholder="ID" name="caste_id" value={Caste.caste_id} onChange={handleChange}/>
        <input type="text" placeholder="Caste Name" name="caste_name" value={Caste.caste_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button> */}
        </Box>
    </div>)
}

export default UpdateCaste;