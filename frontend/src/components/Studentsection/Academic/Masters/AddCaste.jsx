import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Card, CardContent, CardHeader } from "@mui/material";

function AddCaste() {
  const [caste, setCaste] = useState({
    caste_id: "",
    caste_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCaste((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/caste", caste);
      navigate("/caste");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  //   console.log(branch);
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal'}}
      noValidate
      autoComplete="off">

      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <CardHeader
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign:'center' }}>Add Caste</h1>}
            style={{ backgroundColor: "lightblue", padding: "1px" }}
          />

          <div className="form">


            <TextField
              required
              type="number"
              variant="outlined"
              label="Caste ID"
              name="caste_id"
              onChange={handleChange}
            />

            <TextField
              required
              variant="outlined"
              name="caste_name"
              label="Caste Name"
              onChange={handleChange}
            />

            {/* <input type="text" placeholder="Caste Name" name="caste_name" onChange={handleChange}/> */}

            {/* <Button variant="contained" onClick={handleClick}size="medium" style={{ marginTop: '12px' }}>Add</Button> */}
            <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>

            {/* <button onClick={handleClick}>Add</button> */}
          </div>
        </CardContent >
      </Card >
    </Box >
  )
}

export default AddCaste