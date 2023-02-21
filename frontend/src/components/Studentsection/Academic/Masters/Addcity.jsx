import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Addcity() {
  const [city, setCity] = useState({
    city_id: "",
    city_name: "",
    isDistrict: "",
    state_id: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCity((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/city", city);
          navigate("/city");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="City Id" name="city_id" onChange={handleChange}/>
      <input type="text" placeholder="city Name" name="city_name" onChange={handleChange}/>
      <input type="text" placeholder="Is District " name="isDistrict" onChange={handleChange}/>
      <input type="number" placeholder="State" name="state_id" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Addcity

