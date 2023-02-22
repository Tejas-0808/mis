import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddCaste() {
  const [caste, setCaste] = useState({
    caste_id: "",
    caste_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCaste((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/caste", caste);
          navigate("/caste");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Caste Id" name="caste_id" onChange={handleChange}/>
      <input type="text" placeholder="Caste Name" name="caste_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddCaste