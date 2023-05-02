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
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function AddSession() {
  const [Session, setSession] = useState([]);
  const [Addsession, setAddSession] = useState({
    term : "",
    year : ""
});

  const fetchAllSession = async () => {
    try {
        const res = await axios.get("http://localhost:3001/session",{
          headers: { authorization: localStorage.getItem('token') }
        });
        setSession(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllSession();
    // eslint-disable-next-line
  }, []);
   
  const handleChange = (e) => {
  
    setAddSession((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleClick = async (e) => {

    e.preventDefault();
    try {
      // const session_name1=  `${Session.term} ${Session.year}-${(Session.year%100+1)}`

      console.log(Session);
  // setSession(prevState => ({
  //   ...prevState,
  //   // session_name: session_name1
  // }));
      await axios.post("http://localhost:3001/session", Addsession,{
        headers: { authorization: localStorage.getItem('token') }
      });
      // navigate("/session");
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
  //   <Box
  // component="form"
  // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
  // noValidate
  // autoComplete="off">
  // <Card sx={{ minWidth: 275 }}>
  //   <CardContent>
  //       <CardHeader
  //         title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}>Add Session</h1>}
  //         style={{ backgroundColor: "lightblue",padding: "1px"  }}
  //       />
  //       <br></br>

  <div style={{ height: '100%', width: '100%'}}>
      
  <Box sx={{ width: '100%', height: '100%'}}>
        {/* <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
      noValidate
      autoComplete="off"
    > */}
             <Card sx={{ m: 1, minWidth: 275, backgroundColor:'#F5F5F5' }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="ADD SESSION"
       />
    {/* <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    > */}

<div style={{ padding: '15px'}}  >
          {/* <Grid container spacing={2} sx={{ width: '100%' }}> */}
          <Grid container spacing={1} >
            {/* <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
            <TextField
              required
              type="text"
              variant="outlined"
              label="Session ID"
              name="session_id"
              onChange={handleChange}
            />
            </Grid> */}
          <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'left' }}>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
              <FormControl sx={{ m: 1, minWidth: 275, paddingRight: 0 }}>
                <InputLabel id="demo-simple-select-label">Term</InputLabel>
                <Select
                  required
                  labelId="demo-simple-select-label"
                  name="term"
                  label="Term"
                  onChange={handleChange}
                  sx={{ height: 55}}
                >
                  <MenuItem value="odd">ODD</MenuItem>
                  <MenuItem value="even">EVEN</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
              <TextField
                required
                type="number"
                variant="outlined"
                label="From Year"
                name="year"
                onChange={handleChange}
                sx={{ m: 1, minWidth: 120, paddingLeft: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ p: 0, m: 0 }}>
            <Button variant="contained"
            onClick={handleClick}
            sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }} >Add</Button>
          
            </Grid>
          </Grid>

           
          </Grid>

          {/* <div style={{ display: 'flex', justifyContent: 'center' , marginTop:'15px' }}>
          <Button variant="contained"
            onClick={handleClick}
            sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }} >Add</Button>
          
            </div> */}

          <br/>
       

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead style={{ backgroundColor: '#1976d2' }}>
          <TableRow>
            {/* <TableCell align="right">Session ID</TableCell> */}
            <TableCell align="center">Session Name</TableCell>
            <TableCell align="center">Term</TableCell>
            <TableCell align="center">Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Session.map((Session) => (
            <TableRow
              key={Session.session_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {Session.session_id}
              </TableCell> */}
              <TableCell align="center">{Session.session_name}</TableCell>
              <TableCell align="center">{Session.term}</TableCell>
              <TableCell align="center">{Session.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
          </TableContainer>
          </div>
   </CardContent>
  </Card>


  </Box>
  </div>
  )
}

export default AddSession

