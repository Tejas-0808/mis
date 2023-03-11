import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

function AddReligion() {
  const [Religion, setReligion] = useState({
    religion_id: "",
    Religion_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setReligion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/religion", Religion);
          navigate("/religion");
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
    <h1>ADD RELIGION</h1>
        <hr></hr>
        <br></br>
    <TextField
          required
          type="number"
          variant="outlined"
          label="Religion ID"
          name="religion_id"
          onChange={handleChange}
        />
      {/* <input type="number" placeholder="Religion ID" name="religion_id" onChange={handleChange}/> */}
      <TextField
          required
          variant="outlined"
          name="Religion_name"
          label="Religion Name"
          onChange={handleChange}
        />
      {/* <input type="text" placeholder="Religion Name" name="Religion_name" onChange={handleChange}/> */}
      <Button variant="contained" onClick={handleClick}>Add</Button>
      {/* <button onClick={handleClick}>Add</button> */}
    </div>
    </Box>
  )
}

export default AddReligion

