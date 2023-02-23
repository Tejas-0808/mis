import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddReligion() {
  const [Religion, setReligion] = useState({
    religion_id: "",
    Religion_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setReligion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/religion", Religion);
          navigate("/religion");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="Religion ID" name="religion_id" onChange={handleChange}/>
      <input type="text" placeholder="Religion Name" name="Religion_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddReligion

