import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';



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
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="form">
    <h1>ADD DISTRICT</h1>
        <hr></hr>
        <br></br>
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
      <Button variant="contained" onClick={handleClick}>Add</Button>
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
    </Box>
  )
}

export default AddDistrict

