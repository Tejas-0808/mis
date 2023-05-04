import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import {  InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader} from "@mui/material/";

// import { useEffect } from 'react';
const pageid = "2";//IN FUTURE WE WILL FETCH IT FROM DATABASE 


function AddBos() {
  const [Bos, setBos] = useState({
    bos_id: "",
    bos_name: "",
    code:""
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
      await axios.post("http://localhost:3001/b_o_s", Bos,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/bos");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: '100vh', width: '100%'}}>
    
    <Box component="form"
    sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
    noValidate
    autoComplete="off"
    >
       <Card sx={{ m: 1, minWidth: 275 }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="ADD BOS"
       />
      {true ? (
      <>
      <div className="form">
        {/* <h1>ADD BOS</h1> */}
        <hr />
        <TextField type="number" required label="BOS ID" name="bos_id" onChange={handleChange} />
        <TextField type="text" required label="BOS Name" name="bos_name" onChange={handleChange} />
        <TextField type="text" required label="BOS code" name="code" onChange={handleChange} />

        <Button variant="contained" onClick={handleClick}sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>Add</Button>
      </div>
    </>):<>You don't have access to this page</>}
    </CardContent>
      
      </Card>
    </Box>
    </div>    
  )
}

export default AddBos

