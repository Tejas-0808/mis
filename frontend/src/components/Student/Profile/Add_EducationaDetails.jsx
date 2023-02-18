import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


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
    Out_of_marks:"",
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
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Registration ID" name="Reg_id" onChange={handleChange}/>
      <input type="text" placeholder="Custom ID" name="Custom_Id" onChange={handleChange}/>
      <input type="text" placeholder="Exam Type " name="Exam_type" onChange={handleChange}/>
      <input type="text" placeholder="Month of passing" name="Month_of_Passing" onChange={handleChange}/>
      <input type="number" placeholder="Year of exam" name="Year_of_exam" onChange={handleChange}/>
      <input type="text" placeholder="Board " name="Board" onChange={handleChange}/>
      <input type="text" placeholder="School/College name" name="School_college_name" onChange={handleChange}/>
      <input type="text" placeholder="Address of school/college" name="Address_School_college" onChange={handleChange}/>
      <input type="number" placeholder="Marks Obtained" name="Marks_obtained" onChange={handleChange}/>
      <input type="number" placeholder="Out of " name="Out_of_marks" onChange={handleChange}/>

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add_EducationDetails

