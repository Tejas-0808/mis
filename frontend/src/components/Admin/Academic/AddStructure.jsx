import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddStructure() {
  const [Structure, setStructure] = useState({
    strid: "",
    scheme_id: "",
    category: "",
    semester: "",
    branch_id: "",
    board_of_study: "",
    coursecode: "",
    coursename: "",
    lecture: "",
    tut: "",
    pract: "",
    ise1: "",
    ise2: "",
    ise3: "",
    PR: "",
    TW: "",
    ese: "",
    total_marks: "",
    total_credits: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setStructure((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/structure", Structure);
          navigate("/structure");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Structure Id" name="strid" onChange={handleChange}/>
      <input type="number" placeholder="Scheme Id" name="scheme_id" onChange={handleChange}/>
      <input type="text" placeholder="category" name="category" onChange={handleChange}/>
      <input type="text" placeholder="Semester" name="semester" onChange={handleChange}/>
      <input type="number" placeholder="Branch Id" name="branch_id" onChange={handleChange}/>
      <input type="text" placeholder="Board of Study" name="board_of_study" onChange={handleChange}/>
      <input type="text" placeholder="Course Code" name="coursecode" onChange={handleChange}/>
      <input type="text" placeholder="Course Name" name="coursename" onChange={handleChange}/>
      <input type="number" placeholder="Lecture" name="lecture" onChange={handleChange}/>
      <input type="number" placeholder="Tutorial" name="tut" onChange={handleChange}/>
      <input type="number" placeholder="Practical" name="pract" onChange={handleChange}/>
      <input type="number" placeholder="In Sem 1" name="ise1" onChange={handleChange}/>
      <input type="number" placeholder="In Sem 2" name="ise2" onChange={handleChange}/>
      <input type="number" placeholder="In Sem 3" name="ise3" onChange={handleChange}/>
      <input type="number" placeholder="PR" name="PR" onChange={handleChange}/>
      <input type="number" placeholder="TW" name="TW" onChange={handleChange}/>
      <input type="number" placeholder="End Sem" name="ese" onChange={handleChange}/>
      <input type="number" placeholder="Total Marks" name="total_marks" onChange={handleChange}/>
      <input type="number" placeholder="Total Credits" name="total_credits" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddStructure