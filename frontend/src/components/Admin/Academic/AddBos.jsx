import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';


function AddBos() {
  const [Bos, setBos] = useState({
    bos_id: "",
    bos_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/b_o_s", Bos);
      navigate("/bos");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  //   console.log(branch);
  return (
    <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
    noValidate
    autoComplete="off"
  >
      <div className="form">
        <h1>ADD BOS</h1>
        <hr />
        <TextField type="number" required label="BOS ID" name="bos_id" onChange={handleChange} />
        <TextField type="text" required label="BOS Name" name="bos_name" onChange={handleChange} />
        <Button variant="contained" onClick={handleClick}>Add</Button>
      </div>
    </Box>
  )
}

export default AddBos

