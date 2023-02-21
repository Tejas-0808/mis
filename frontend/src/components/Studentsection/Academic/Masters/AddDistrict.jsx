import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddDistrict() {
  const [District, setDistrict] = useState({
    district_id: "",
    district_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setDistrict((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/district", District);
          navigate("/district");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="District ID" name="district_id" onChange={handleChange}/>
      <input type="text" placeholder="District Name" name="district_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddDistrict

