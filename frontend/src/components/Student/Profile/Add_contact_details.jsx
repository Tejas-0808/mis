import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";


function Add_C_d() {
  const [student_info, setStudent_info] = useState({
    Email_id: "",
    Phone_No: "",
    Permanent_Add: "",
    Current_Add: "",
    Fathers_email: "",
    Father_mobile: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setStudent_info((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/student", student_info);
      navigate("/contact_details");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(student_info);
  return (
    <Card sx={{ minWidth: 275 }}>
      <h1>Contact Detail</h1><hr />
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Student Contact Details"
          />

          <div className="form">

            <TextField required type="text" label="Email Id" name="Email_id" onChange={handleChange} />
            <TextField required type="number" label="Mobile Number" name="Phone_No" onChange={handleChange} />
            <TextField required type="text" label="Permanent Address " name="Permanent_Add" onChange={handleChange} />
            <TextField required type="text" label="Current Address" name="Current_Add" onChange={handleChange} />
            <TextField required type="text" label="Father's Email" name="Fathers_email" onChange={handleChange} />
            <TextField required type="text" label="Father's Name" name="Father_name" onChange={handleChange} />
            <Button variant='contained' onClick={handleClick}>Add</Button>
          </div>
        </Box>
      </CardContent>
    </Card>)
}

export default Add_C_d;

