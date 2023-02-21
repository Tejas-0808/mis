import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Add_per_d() {
  const [personaldetails, setPersonalDetails] = useState({
    Reg_Id:"", 
    roll_no:"", 
    First_Name:"", 
    Middle_Name:"", 
    Last_Name:"", 
    Email_id:"", 
    Mobile_No:"", 
    Caste:"", 
    Religion:"", 
    Nationality:"", 
    Category:"", 
    Blood_group:"", 
    Gender:"", 
    D_O_B:"", 
    Birth_Place:"",
    Marital_Status:"", 
    Seat_type:"", 
    Student_type:"", 
    Addhar_no:"", 
    Permanent_Add:"", 
    Current_Add:"", 
    Physically_handicapped:"", 
    Branch:"", 
    Photo:"", 
    Signature:"", 
    Fathers_Name:"", 
    Fathers_email:"", 
    Fathers_mobile:"", 
    Fathers_occupation:"", 
    Fathers_officeno:"",
    Mothers_Name:"", 
    Mothers_email:"", 
    Mothers_mobile:"", 
    Mothers_occupation:"",
    Mothers_officeno:"", 
    Guardian_Name:"", 
    Guardian_email:"", 
    Guardian_mobile:"", 
    Guardian_occupation:"",
    Guardian_officeno:"",
    Date_of_admission:"", 
    Degree:"", 
    Payment_type:"", 
    State_eligibility:"",
    Year:"",
    Admission_batch:"",
    Semester:"",
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
    <div className="form">
      ADD
      <input type="number" placeholder="Registration ID" name="Reg_Id" onChange={handleChange}/>
      <input type="text" placeholder="Roll Number" name="roll_no" onChange={handleChange}/>
      <input type="text" placeholder="First Name" name="First_Name" onChange={handleChange}/>
      <input type="text" placeholder="Middle Name" name="Middle_Name" onChange={handleChange}/>
      <input type="text" placeholder="Last Name" name="Last_Name" onChange={handleChange}/>
      <input type="text" placeholder="Email Id" name="Email_id" onChange={handleChange}/>
      <input type="number" placeholder="Mobile Number" name="Mobile_No" onChange={handleChange}/>
      <input type="text" placeholder="Caste" name="Caste" onChange={handleChange}/>
      <input type="text" placeholder="Religion" name="Religion" onChange={handleChange}/>
      <input type="text" placeholder="Nationality" name="Nationality" onChange={handleChange}/>
      <input type="text" placeholder="Category" name="Category" onChange={handleChange}/>
      <input type="text" placeholder="Blood_group" name="Blood_group" onChange={handleChange}/>
      <input type="text" placeholder="Gender" name="Gender" onChange={handleChange}/>
      <input type="text" placeholder="D_O_B" name="D_O_B" onChange={handleChange}/>
      <input type="text" placeholder="Birth_Place" name="Birth_Place" onChange={handleChange}/>
      <input type="text" placeholder="Marital_Status" name="Marital_Status" onChange={handleChange}/>
      <input type="text" placeholder="Seat_type" name="Seat_type" onChange={handleChange}/>
      <input type="text" placeholder="Student_type" name="Student_type" onChange={handleChange}/>
      <input type="text" placeholder="Addhar_no" name="Addhar_no" onChange={handleChange}/>
      <input type="text" placeholder="Permanent Address" name="Permanent_Add" onChange={handleChange}/>
      <input type="text" placeholder="Current Address" name="Current_Add" onChange={handleChange}/>
      <input type="text" placeholder="Physically_handicapped" name="Physically_handicapped" onChange={handleChange}/>
      <input type="text" placeholder="Branch" name="Branch" onChange={handleChange}/>
      <input type="text" placeholder="Photo" name="Photo" onChange={handleChange}/>
      <input type="text" placeholder="Signature" name="Signature" onChange={handleChange}/>
      <input type="text" placeholder="Fathers_Name" name="Fathers_Name" onChange={handleChange}/>
      <input type="text" placeholder="Fathers_email" name="Fathers_email" onChange={handleChange}/>
      <input type="number" placeholder="Fathers_mobile" name="Fathers_mobile" onChange={handleChange}/>
      <input type="text" placeholder="Fathers_occupation" name="Fathers_occupation" onChange={handleChange}/>
      <input type="number" placeholder="Fathers_officeno" name="Fathers_officeno" onChange={handleChange}/>
      <input type="text" placeholder="Mothers_Name" name="Mothers_Name" onChange={handleChange}/>
      <input type="text" placeholder="Mothers_email" name="Mothers_email" onChange={handleChange}/>
      <input type="number" placeholder="Mothers_mobile" name="Mothers_mobile" onChange={handleChange}/>
      <input type="text" placeholder="Mothers_occupation" name="Mothers_occupation" onChange={handleChange}/>
      <input type="number" placeholder="Mothers_officeno" name="Mothers_officeno" onChange={handleChange}/>
      <input type="text" placeholder="Guardian_Name" name="Guardian_Name" onChange={handleChange}/>
      <input type="text" placeholder="Guardian_email" name="Guardian_email" onChange={handleChange}/>
      <input type="number" placeholder="Guardian_mobile" name="Guardian_mobile" onChange={handleChange}/>
      <input type="text" placeholder="Guardian_occupation" name="Guardian_occupation" onChange={handleChange}/>
      <input type="number" placeholder="Guardian_officeno" name="Guardian_officeno" onChange={handleChange}/>
      <input type="text" placeholder="Date_of_admission" name="Date_of_admission" onChange={handleChange}/>
      <input type="text" placeholder="Payment_type" name="Payment_type" onChange={handleChange}/>
      <input type="text" placeholder="State_eligibility" name="State_eligibility" onChange={handleChange}/>
      <input type="number" placeholder="Year" name="Year" onChange={handleChange}/>
      <input type="number" placeholder="Admission_batch" name="Admission_batch" onChange={handleChange}/>
      <input type="number" placeholder="Semester" name="Semester" onChange={handleChange}/>

      
      

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add_per_d