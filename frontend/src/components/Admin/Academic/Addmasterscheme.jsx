import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddMasterscheme() {
  const [Masterscheme, setMasterscheme] = useState({
    mastersch_id: "",
    master_scheme: "",
    from_year: "",
    to_year: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setMasterscheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/master_scheme", Masterscheme);
          navigate("/Masterscheme");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  console.log(Masterscheme);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder=" Master ID" name="mastersch_id" onChange={handleChange}/>
      <input type="text" placeholder="Master scheme" name="master_scheme" onChange={handleChange}/>
      <input type="number" placeholder="From Year" name="from_year" onChange={handleChange}/>
      <input type="number" placeholder="To Year" name="to_year" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddMasterscheme

