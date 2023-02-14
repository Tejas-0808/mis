// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Add = () => {
//   const [book, setBook] = useState({
//     title: "",
//     desc: "",
//     price: null,
//     cover: "",
//   });
//   const [error,setError] = useState(false)

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:8800/books", book);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError(true)
//     }
//   };

//   return (
//     <div className="form">
//       <h1>Add New Book</h1>
//       <input
//         type="text"
//         placeholder="Book title"
//         name="title"
//         onChange={handleChange}
//       />
//       <textarea
//         rows={5}
//         type="text"
//         placeholder="Book desc"
//         name="desc"
//         onChange={handleChange}
//       />
//       <input
//         type="number"
//         placeholder="Book price"
//         name="price"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         placeholder="Book cover"
//         name="cover"
//         onChange={handleChange}
//       />
//       <button onClick={handleClick}>Add</button>
//       {error && "Something went wrong!"}
//       <Link to="/">See all books</Link>
//     </div>
//   );
// };

// export default Add;

import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Add() {
  const [branch, setBranch] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    students_enrolled: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/branch", branch);
          navigate("/");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  console.log(branch);
  return (
    <div className="form">
      ADD
      <input type="number" placeholder="ID" name="Branch_id" onChange={handleChange}/>
      <input type="text" placeholder="Brach Name" name="Branch_name" onChange={handleChange}/>
      <input type="text" placeholder="HOD " name="HOD" onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="students_enrolled" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add

