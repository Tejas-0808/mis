import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';

function Add() {
  const [branch, setBranch] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    Students_enrolled: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/branch", branch ,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/branch");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(branch);
  return (
    <Box component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
      noValidate
      autoComplete="off"
    >
      <div className="form">
        <h1>ADD BRANCH</h1><hr />
        <TextField required type="number" label="ID" name="Branch_id" onChange={handleChange} />
        <TextField required type="text" label="Brach Name" name="Branch_name" onChange={handleChange} />
        <TextField required type="text" label="HOD " name="HOD" onChange={handleChange} />
        <TextField required type="number" label="Student enrolled" name="Students_enrolled" onChange={handleChange} />
        <Button variant="contained" onClick={handleClick}>Add</Button>
      </div>
    </Box>
  )
}

export default Add

