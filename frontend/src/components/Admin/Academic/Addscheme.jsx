import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Addscheme() {
  const [scheme, setScheme] = useState({
    scid: "",
    master_sch_id: "",
    category: "",
    ft: "",
    pt: ""
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setScheme((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/scheme", scheme);
          navigate("/scheme");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  console.log(scheme);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="ID" name="scid" onChange={handleChange}/>
      <input type="text" placeholder="Master id" name="master_sch_id" onChange={handleChange}/>
      <input type="text" placeholder="Category" name="category" onChange={handleChange}/>
      <input type="number" placeholder="ft" name="ft" onChange={handleChange}/>
      <input type="number" placeholder="pt" name="pt" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Addscheme

