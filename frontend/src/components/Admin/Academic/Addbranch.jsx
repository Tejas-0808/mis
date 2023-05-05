import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, TextField, Button } from '@mui/material/';
import { InputLabel, FormControl, Select, MenuItem, CardContent, Card, CardHeader } from "@mui/material/";


function Addbranch() {
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
      await axios.post("http://localhost:3001/branch", branch, {
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/branch");
    } catch (err) {
      console.log(err);
      navigate("/loginform");
      // setError(true)
    }
  };

  console.log(branch);
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
              title="ADD BRANCH"
            />
            <div className="form">
              {/* <h1>ADD BRANCH</h1><hr /> */}
              <TextField required type="number" label="ID" name="Branch_id" onChange={handleChange} />
              <TextField required type="text" label="Branch Name" name="Branch_name" onChange={handleChange} />
              <TextField required type="text" label="HOD " name="HOD" onChange={handleChange} />
              <TextField required type="number" label="Student enrolled" name="Students_enrolled" onChange={handleChange} />
              <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>
            </div>
          </CardContent>

        </Card>
      </Box>
    </div>
  )
}

export default Addbranch

