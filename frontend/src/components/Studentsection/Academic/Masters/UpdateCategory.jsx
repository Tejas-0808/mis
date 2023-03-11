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

function UpdateCategory(){
    const [Category, setCategory] = useState({category_id: "" ,category_name: ""});
    const navigate = useNavigate();
    const location = useLocation();
    
    console.log(location);
    const C_id = location.pathname.split("/")[2];

    const fetchCategory = async() => {
        try{
            const res = await axios.get("http://localhost:3001/category/"+ C_id);
            setCategory(res.data);
            console.log(Category);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchCategory();
    }, []);

    const handleChange = async (e) => {
        setCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:3001/category/" + C_id, Category);
            navigate("/category");
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
    <h1>UPDATE CATEGORY</h1>
        <hr></hr>
        <br></br>
      <TextField
          required
          type="number"
          variant="outlined"
          label="Category ID"
          name="category_id"
          value={Category.category_id}
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          name="category_name"
          label="Category Name"
          value={Category.category_name}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleEdit}>SUBMIT</Button>
        {/* <h2>UPDATE CATEGORY</h2>
        <input type="number" placeholder="ID" name="category_id" value={Category.category_id} onChange={handleChange}/>
        <input type="text" placeholder="Category Name" name="category_name" value={Category.category_name} onChange={handleChange}/>
        <button onClick={handleEdit}>Submit</button> */}

        </Box>
    </div>)
   
}

export default UpdateCategory;