import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddPayment() {
  const [payment, setPayment] = useState({
    payment_id: "",
    payment_type: "",
    category_id: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setPayment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/payment", payment);
          navigate("/payment");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

//   console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="payment id" name="payment_id" onChange={handleChange}/>
      <input type="text" placeholder="payment type" name="payment_type" onChange={handleChange}/>
      <input type="number" placeholder="category id " name="category_id" onChange={handleChange}/>
      {/* <input type="number" placeholder="Student enrolled" name="students_enrolled" onChange={handleChange}/> */}
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddPayment

