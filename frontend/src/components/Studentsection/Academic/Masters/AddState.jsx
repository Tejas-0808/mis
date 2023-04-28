import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { TextField, Card, CardHeader, CardContent } from "@mui/material";


function AddState() {
  const [state, setState] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    students_enrolled: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/state", state);
      navigate("/state");
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
            title={<h1 style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px", textAlign: 'center' }}>Add State</h1>}
            style={{ backgroundColor: "lightblue", padding: "1px" }}
          />
          <div className="form">
            <TextField
              required
              type="number"
              variant="outlined"
              label="State ID"
              name="state_id"
              onChange={handleChange}
            />
            {/* <input type="number" placeholder="State Id" name="state_id" onChange={handleChange}/> */}
            {/* <input type="text" placeholder="State Name" name="state_name" onChange={handleChange}/> */}
            <TextField
              required
              variant="outlined"
              name="state_name"
              label="State Name"
              onChange={handleChange}
            />
            {/* <button onClick={handleClick}>Add</button> */}
            <Button sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }} variant="contained" onClick={handleClick}>Add</Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddState

