import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddState() {
  const [state, setState] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    students_enrolled: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/state", state);
          navigate("/state");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="State Id" name="state_id" onChange={handleChange}/>
      <input type="text" placeholder="State Name" name="state_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddState

