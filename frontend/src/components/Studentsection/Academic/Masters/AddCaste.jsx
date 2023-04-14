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
import {Card, CardContent, CardHeader} from "@mui/material";

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
    <Card sx={{ minWidth: 275 }}>
      <h1>&nbsp;&nbsp;Masters</h1><hr />
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Add Caste"
          />
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <div className="form">
 
        {/* <hr></hr>
        <br></br> */}
      <TextField
          required
          type="number"
          variant="outlined"
          label="Caste ID"
          name="caste_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="Caste Id" name="caste_id" onChange={handleChange}/> */}
      <TextField
          required
          variant="outlined"
          name="caste_name"
          label="Caste Name"
          onChange={handleChange}
        />
    
      {/* <input type="text" placeholder="Caste Name" name="caste_name" onChange={handleChange}/> */}
     
      <Button variant="contained" onClick={handleClick}size="medium" style={{ marginTop: '12px' }}>Add</Button>
    
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
    </Box>
    </Box>
    </CardContent>
    </Card>
  )
}

export default AddCaste