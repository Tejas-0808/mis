import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

function Addcity() {
  const [city, setCity] = useState({
    city_id: "",
    city_name: "",
    isDistrict: "",
    state_id: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/city", city);
          navigate("/city");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="form">
    <h1>ADD CITY</h1>
        <hr></hr>
        <br></br>
      <TextField
          required
          type="number"
          variant="outlined"
          label="City ID"
          name="city_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="City Id" name="city_id" onChange={handleChange}/> */}
      <TextField
          required
          variant="outlined"
          name="city_name"
          label="City Name"
          onChange={handleChange}
        />
      {/* <input type="text" placeholder="city Name" name="city_name" onChange={handleChange}/> */}
      <TextField
          required
          variant="outlined"
          name="isDistrict"
          label="Is District"
          onChange={handleChange}
        />
      {/* <input type="text" placeholder="Is District " name="isDistrict" onChange={handleChange}/> */}
      <TextField
          required
          type="number"
          variant="outlined"
          label="State ID"
          name="state_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="State" name="state_id" onChange={handleChange}/> */}
      <Button variant="contained" onClick={handleClick}>Add</Button>
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
    </Box>
  )
}

export default Addcity

