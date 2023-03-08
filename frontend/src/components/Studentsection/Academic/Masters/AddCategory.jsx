import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
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


function AddCategory() {
  const [category, setCategory] = useState({
    category_id: "",
    category_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/category", category);
          navigate("/category");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Category Id" name="category_id" onChange={handleChange}/>
      <input type="text" placeholder="Category Name" name="category_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddCategory