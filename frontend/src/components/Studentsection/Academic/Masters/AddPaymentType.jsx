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

function AddPayment() {
  const [payment, setPayment] = useState({
    payment_id: "",
    payment_type: "",
    category_id: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/payment", payment);
          navigate("/payment");
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
    <h1>ADD PAYMENT</h1>
        <hr></hr>
        <br></br>
        <TextField
          required
          type="number"
          variant="outlined"
          label="Payment ID"
          name="payment_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="payment id" name="payment_id" onChange={handleChange}/> */}
      <TextField
          required
          variant="outlined"
          name="payment_type"
          label="Payment Type"
          onChange={handleChange}
        />
      {/* <input type="text" placeholder="payment type" name="payment_type" onChange={handleChange}/> */}
      <TextField
          required
          type="number"
          variant="outlined"
          label="Category ID"
          name="category_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="category id " name="category_id" onChange={handleChange}/> */}
      {/* <input type="number" placeholder="Student enrolled" name="students_enrolled" onChange={handleChange}/> */}
      <Button variant="contained" onClick={handleClick}>Add</Button>
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
    </Box>
  )
}

export default AddPayment

