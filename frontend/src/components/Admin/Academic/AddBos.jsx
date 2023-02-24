import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddBos() {
  const [Bos, setBos] = useState({
    bos_id: "",
    bos_name: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/b_o_s", Bos);
          navigate("/bos");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="BOS ID" name="bos_id" onChange={handleChange}/>
      <input type="text" placeholder="BOS Name" name="bos_name" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddBos

