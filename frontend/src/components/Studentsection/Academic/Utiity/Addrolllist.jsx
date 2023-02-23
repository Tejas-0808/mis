import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Add_rolllist() {
  const [rolllist, setrolllist] = useState({
    roll_no: "",
    First_name: "",
    Middle_name: "",
    Last_name: "",
   
   
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setrolllist((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/student", rolllist);
          navigate("/Rolllist");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  console.log(rolllist);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Roll No" name="roll_no" onChange={handleChange}/>
      <input type="text" placeholder="First_name" name="First_name" onChange={handleChange}/>
      <input type="text" placeholder="Middle_name " name="Middle_name" onChange={handleChange}/>
      <input type="text" placeholder="Last_name" name="Last_name" onChange={handleChange}/>
    

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add_rolllist

