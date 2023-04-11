import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";
import "../../../styles/Student/fill_profile.css";

function Details() {
  const [personaldetails, setPersonalDetails] = useState({
    Reg_Id: "",
    roll_no: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Email_id: "",
    Mobile_No: "",
    Caste: "",
    Religion: "",
    Nationality: "",
    Category: "",
    Blood_group: "",
    Gender: "",
    D_O_B: "",
    Birth_Place: "",
    Marital_Status: "",
    Seat_type: "",
    Student_type: "",
    Addhar_no: "",
    Permanent_Add: "",
    Current_Add: "",
    Physically_handicapped: "",
    Branch: "",
    Photo: "",
    Signature: "",
    Fathers_Name: "",
    Fathers_email: "",
    Fathers_mobile: "",
    Fathers_occupation: "",
    Fathers_officeno: "",
    Mothers_Name: "",
    Mothers_email: "",
    Mothers_mobile: "",
    Mothers_occupation: "",
    Mothers_officeno: "",
    Guardian_Name: "",
    Guardian_email: "",
    Guardian_mobile: "",
    Guardian_occupation: "",
    Guardian_officeno: "",
    Date_of_admission: "",
    Degree: "",
    Payment_type: "",
    State_eligibility: "",
    Year: "",
    Admission_batch: "",
    Semester: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setPersonalDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/student", personaldetails);
      navigate("/personaldetails");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  console.log(personaldetails);
  return (
    <Card sx={{ minWidth: 275 }}>
      <h1>Personal Detail</h1><hr/>
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{backgroundColor: "lightblue"}}
            title="Student Personal Details"
          /> 

          <div className="form">

            <TextField required type="number" label="Registration ID" name="Reg_Id" onChange={handleChange} />
            <TextField required type="text" label="Roll Number" name="roll_no" onChange={handleChange} />
            <TextField required type="text" label="First Name" name="First_Name" onChange={handleChange} />
            <TextField required type="text" label="Middle Name" name="Middle_Name" onChange={handleChange} />
            <TextField required type="text" label="Last Name" name="Last_Name" onChange={handleChange} />
            <TextField required type="text" label="Email Id" name="Email_id" onChange={handleChange} />
            <TextField required type="number" label="Mobile Number" name="Mobile_No" onChange={handleChange} />
            <TextField required type="text" label="Caste" name="Caste" onChange={handleChange} />
            <TextField required type="text" label="Religion" name="Religion" onChange={handleChange} />
            <TextField required type="text" label="Nationality" name="Nationality" onChange={handleChange} />
            <TextField required type="text" label="Category" name="Category" onChange={handleChange} />
            <TextField required type="text" label="Blood_group" name="Blood_group" onChange={handleChange} />
            <TextField required type="text" label="Gender" name="Gender" onChange={handleChange} />
            <TextField required type="text" label="D_O_B" name="D_O_B" onChange={handleChange} />
            <TextField required type="text" label="Birth_Place" name="Birth_Place" onChange={handleChange} />
            <TextField required type="text" label="Marital_Status" name="Marital_Status" onChange={handleChange} />
            <TextField required type="text" label="Seat_type" name="Seat_type" onChange={handleChange} />
            <TextField required type="text" label="Student_type" name="Student_type" onChange={handleChange} />
            <TextField required type="text" label="Addhar_no" name="Addhar_no" onChange={handleChange} />
            <TextField required type="text" label="Permanent Address" name="Permanent_Add" onChange={handleChange} />
            <TextField required type="text" label="Current Address" name="Current_Add" onChange={handleChange} />
            <TextField required type="text" label="Physically_handicapped" name="Physically_handicapped" onChange={handleChange} />
            <TextField required type="text" label="Branch" name="Branch" onChange={handleChange} />
            <TextField required type="text" label="Photo" name="Photo" onChange={handleChange} />
            <TextField required type="text" label="Signature" name="Signature" onChange={handleChange} />
            <TextField required type="text" label="Fathers_Name" name="Fathers_Name" onChange={handleChange} />
            <TextField required type="text" label="Fathers_email" name="Fathers_email" onChange={handleChange} />
            <TextField required type="number" label="Fathers_mobile" name="Fathers_mobile" onChange={handleChange} />
            <TextField required type="text" label="Fathers_occupation" name="Fathers_occupation" onChange={handleChange} />
            <TextField required type="number" label="Fathers_officeno" name="Fathers_officeno" onChange={handleChange} />
            <TextField required type="text" label="Mothers_Name" name="Mothers_Name" onChange={handleChange} />
            <TextField required type="text" label="Mothers_email" name="Mothers_email" onChange={handleChange} />
            <TextField required type="number" label="Mothers_mobile" name="Mothers_mobile" onChange={handleChange} />
            <TextField required type="text" label="Mothers_occupation" name="Mothers_occupation" onChange={handleChange} />
            <TextField required type="number" label="Mothers_officeno" name="Mothers_officeno" onChange={handleChange} />
            <TextField required type="text" label="Guardian_Name" name="Guardian_Name" onChange={handleChange} />
            <TextField required type="text" label="Guardian_email" name="Guardian_email" onChange={handleChange} />
            <TextField required type="number" label="Guardian_mobile" name="Guardian_mobile" onChange={handleChange} />
            <TextField required type="text" label="Guardian_occupation" name="Guardian_occupation" onChange={handleChange} />
            <TextField required type="number" label="Guardian_officeno" name="Guardian_officeno" onChange={handleChange} />
            <TextField required type="text" label="Date_of_admission" name="Date_of_admission" onChange={handleChange} />
            <TextField required type="text" label="Payment_type" name="Payment_type" onChange={handleChange} />
            <TextField required type="text" label="State_eligibility" name="State_eligibility" onChange={handleChange} />
            <TextField required type="number" label="Year" name="Year" onChange={handleChange} />
            <TextField required type="number" label="Admission_batch" name="Admission_batch" onChange={handleChange} />
            <TextField required type="number" label="Semester" name="Semester" onChange={handleChange} />

            <Button variant="contained" onClick={handleClick}>Add</Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Details;