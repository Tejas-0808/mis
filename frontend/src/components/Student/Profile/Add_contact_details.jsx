import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';


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
  const btnstyle = { margin: '20px 10px', padding: 10 }
  return (
    <Card sx={{ minWidth: 350, marginTop: 5 }}>
      <CardHeader
        sx={{ backgroundColor: 'lightblue', textAlign: 'center' }}
        title="Contact Details"
      />
      <CardContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 4,
              width: '25ch',
            },
            border: '1px solid black',
            borderRadius: '8px',
            p: 4,
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          noValidate
          autoComplete="off"
        ><TextField required type="text" label="Email Id" name="Email_id" onChange={handleChange} />
          <TextField required type="number" label="Mobile Number" name="Phone_No" onChange={handleChange} />
          <TextField required type="text" label="Permanent Address " name="Permanent_Add" onChange={handleChange} />
          <TextField required type="text" label="Current Address" name="Current_Add" onChange={handleChange} />
          <TextField required type="text" label="Father's Email" name="Fathers_email" onChange={handleChange} />
          <TextField required type="text" label="Father's Name" name="Father_name" onChange={handleChange} />
          <Button variant="contained" style={btnstyle} onClick={handleClick} fullWidth>Add</Button>
        </Box>
      </CardContent>
    </Card>)
}

export default Add_C_d;

