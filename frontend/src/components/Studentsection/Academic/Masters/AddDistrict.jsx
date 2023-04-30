import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, Card, CardContent, CardHeader } from "@mui/material";


function AddDistrict() {
  const [District, setDistrict] = useState({
    district_id: "",
    district_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setDistrict((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/district", District);
      navigate("/district");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  //   console.log(branch);
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal' }}
      noValidate
      autoComplete="off">

      <Card sx={{ minWidth: 275 }}>
        <CardContent>

          <CardHeader
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add District</h1>}
            style={{ backgroundColor: "lightblue", padding: "1px" }}
          />
          <div className="form">
            <TextField
              required
              type="number"
              variant="outlined"
              label="District ID"
              name="district_id"
              onChange={handleChange}
            />
            {/* <input type="number" placeholder="District ID" name="district_id" onChange={handleChange}/> */}
            <TextField
              required
              variant="outlined"
              name="district_name"
              label="District Name"
              onChange={handleChange}
            />
            {/* <input type="text" placeholder="District Name" name="district_name" onChange={handleChange}/> */}
            <Button variant="contained" onClick={handleClick}
              sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>Add</Button>
            {/* <button onClick={handleClick}>Add</button> */}
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AddDistrict

