import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Add_C_d() {
  const [student_info, setStudent_info] = useState({
    Email_id: "",
    Phone_No: "",
    Permanent_Add: "",
    Current_Add: "",
    Fathers_email:"",
    Father_mobile:"",
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
    <div className="form">
      ADD
      <input type="text" placeholder="Email Id" name="Email_id" onChange={handleChange}/>
      <input type="number" placeholder="Mobile Number" name="Phone_No" onChange={handleChange}/>
      <input type="text" placeholder="Permanent Address " name="Permanent_Add" onChange={handleChange}/>
      <input type="text" placeholder="Current Address" name="Current_Add" onChange={handleChange}/>
      <input type="text" placeholder="Father's Email" name="Fathers_email" onChange={handleChange}/>
      <input type="text" placeholder="Father's Name" name="Father_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add_C_d;

