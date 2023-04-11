import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
// import { checkLinksExists } from '../../Userservice';
// import { useEffect } from 'react';
const pageid = "2";//IN FUTURE WE WILL FETCH IT FROM DATABASE 

function AddBos() {
  const [Bos, setBos] = useState({
    bos_id: "",
    bos_name: "",
  });


  //individual level pe 
  // const [access,setAccess] = useState('');

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   const username = localStorage.getItem('username');
  //   console.log(token);
  //   (async () => {
  //     const exists = await checkLinksExists(username,pageid);
  //     setAccess(exists);
  //     })();
  // },[]); 

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

  return (
    <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
    noValidate
    autoComplete="off"
    >
      {true ? (
      <>
      <div className="form">
        <h1>ADD BOS</h1>
        <hr />
        <TextField type="number" required label="BOS ID" name="bos_id" onChange={handleChange} />
        <TextField type="text" required label="BOS Name" name="bos_name" onChange={handleChange} />
        <Button variant="contained" onClick={handleClick}>Add</Button>
      </div>
    </>):<>You don't have access to this page</>}
    </Box>
  )
}

export default AddBos

