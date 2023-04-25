import React, { useEffect, useState } from 'react'
//import { useState, } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import {Card, CardContent, CardHeader} from "@mui/material";


function AddSession() {
    const [Session, setSession] = useState({
      session_id: "",
      session_name : "",
      term: "",
      year: ""
    });
   
const navigate = useNavigate();
const handleChange = (e) => {
  
    setSession((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleClick = async (e) => {

    e.preventDefault();
    try {
      const session_name1=  `${Session.term} ${Session.year}-${(Session.year%100+1)}`

      console.log(Session);
  setSession(prevState => ({
    ...prevState,
    session_name: session_name1
  }));
      await axios.post("http://localhost:3001/session", Session,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/session");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };
  console.log(Session);
  const [term, setTerm] = useState([]);

  return (
    // <div>
    //   <input type="text" placeholder="Session Id" name="session_id" onChange={handleChange}/>
    //   <label for="term">Term:</label>

    // <select name="term" id="term" onChange={handleChange}>
    //     <option value="">--Select Term--</option>
    //     <option value="odd">ODD</option>
    //     <option value="even">EVEN</option>
    // </select>
    //   <input type="number" placeholder="From Year" name="year" onChange={handleChange}/>
    //   <button onClick={handleClick}>Add</button>
    // </div> 
    <Box
  component="form"
  sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
  noValidate
  autoComplete="off">
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
        <CardHeader
          title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>Add Session</h1>}
          style={{ backgroundColor: "lightblue",padding: "1px"  }}
        />
        <br></br>
    {/* <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    > */}
    <TextField
    required
    type="text"
    variant="outlined"
    label="Session ID"
    name="session_id"
    onChange={handleChange}
  />
    <FormControl sx={{ m: 1, minWidth:"25ch" }}>
      <InputLabel id="demo-simple-select-label">Term</InputLabel>
      <Select
        required
        labelId="demo-simple-select-label"
     //   id="demo-simple-select"
        name="term"
        //value={term}
        label="Term"
        onChange={handleChange}
        sx={{ height: 45}}
      >
        <MenuItem value="odd">ODD</MenuItem>
        <MenuItem value="even">EVEN</MenuItem>
      </Select>
    </FormControl>
        <TextField
        required
        type="number"
        variant="outlined"
        label="From Year"
        name="year"
        onChange={handleChange}
      />
      
   <Button variant="contained"
    onClick={handleClick}
    sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 45 }} >Add</Button>
  
   </CardContent>
  </Card>


  </Box>
  )
}

export default AddSession

