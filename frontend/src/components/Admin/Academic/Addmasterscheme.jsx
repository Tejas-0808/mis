import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import { InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader } from "@mui/material/";

function AddMasterscheme() {
  const [Masterscheme, setMasterscheme] = useState({
    mastersch_id: "",
    master_scheme: "",
    from_year: "",
    to_year: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setMasterscheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/master_scheme", Masterscheme, {
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/Masterscheme");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(Masterscheme);
  return (
    <div style={{ height: '100vh', width: '100%' }}>

      <Box component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, }}
        noValidate
        autoComplete="off"
      >
        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>


          <CardContent>

            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="ADD MASTER SCHEME"
            />
            <div className="form">
              {/* <h1>ADD MASTER SCHEME</h1> <hr></hr> */}
              <TextField required type="number" label=" Master ID" name="mastersch_id" onChange={handleChange} />
              <TextField required type="text" label="Master scheme" name="master_scheme" onChange={handleChange} />
              <TextField required type="number" label="From Year" name="from_year" onChange={handleChange} />
              <TextField required type="number" label="To Year" name="to_year" onChange={handleChange} />
              <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>
            </div>
          </CardContent>

        </Card>
      </Box>
    </div>
  )
}

export default AddMasterscheme

