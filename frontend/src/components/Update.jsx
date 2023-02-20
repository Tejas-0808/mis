import React from 'react'
import { useState, } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function Update() {
  const [branch, setBranch] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    students_enrolled: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const B_id = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.put("http://localhost:3001/branch/" + B_id, branch);
          navigate("/");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  console.log(branch);
  return (
    <div className="form">
      Update Branch
      <br/>
      <input type="number" placeholder="ID" name="Branch_id" onChange={handleChange}/>
      <input type="text" placeholder="Brach Name" name="Branch_name" onChange={handleChange}/>
      <input type="text" placeholder="HOD " name="HOD" onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="students_enrolled" onChange={handleChange}/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update

