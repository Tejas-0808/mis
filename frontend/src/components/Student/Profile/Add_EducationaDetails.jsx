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


function Add_EducationDetails() {
  const [Edudetails, setEdudetails] = useState({
    Reg_id: "",
    Custom_Id: "",
    Exam_type: "",
    Month_of_Passing: "",
    Year_of_exam: "",
    Board: "",
    School_college_name: "",
    Address_School_college: "",
    Marks_obtained: "",
    Out_of_marks: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setEdudetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/qualification_details", Edudetails);
      navigate("/Educationdetails");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(Edudetails);
  const btnstyle = { margin: '20px 10px', padding: 10 }
  return (
    <Box>
    <Card sx={{ minWidth: 275, marginTop: 5 }}>
      <CardHeader
        sx={{ backgroundColor: 'lightblue', textAlign: 'center' }}
        title="Educational Details"
      />
      <CardContent>
       
          component="form"
          sx={{
            '& .MuiTextField-root': {
              m: 2,
              width: '25ch',
            },
            border: '1px solid black',
            borderRadius: '8px',
            p: 4,
            boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
          }}
          noValidate
          autoComplete="off"
        <TextField required type="number" label="Registration ID" name="Reg_id" onChange={handleChange} />
          <TextField required type="text" label="Custom ID" name="Custom_Id" onChange={handleChange} />
          <TextField required type="text" label="Exam Type " name="Exam_type" onChange={handleChange} />
          <TextField required type="text" label="Month of passing" name="Month_of_Passing" onChange={handleChange} />
          <TextField required type="number" label="Year of exam" name="Year_of_exam" onChange={handleChange} />
          <TextField required type="text" label="Board " name="Board" onChange={handleChange} />
          <TextField required type="text" label="School/College name" name="School_college_name" onChange={handleChange} />
          <TextField required type="text" label="Address of school/college" name="Address_School_college" onChange={handleChange} />
          <TextField required type="number" label="Marks Obtained" name="Marks_obtained" onChange={handleChange} />
          <TextField required type="number" label="Out of " name="Out_of_marks" onChange={handleChange} />

          <Button variant="contained" style={btnstyle} onClick={handleClick} fullWidth>Add</Button>
      </CardContent>
    </Card>
    </Box>
    )
}

export default Add_EducationDetails

