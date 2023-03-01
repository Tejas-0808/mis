import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function AddSession() {
    const [Session, setSession] = useState({
      session_id: "",
      session_name : "",
      term: "",
      year: ""
    });

// const navigate = useNavigate();
const handleChange = (e) => {
    setSession((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    const session_name1 = `${Session.term} ${Session.year}-${Session.year%100+1}`;
      console.log(session_name1);
      setSession(prevState => ({
        ...prevState,
        session_name: session_name1
        
      }));
  };
  

  const handleClick = async (e) => {

    e.preventDefault();
    try {
      
    console.log(Session.session_name);
      await axios.post("http://localhost:3001/session", Session);
    //   navigate("/session");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };
  console.log(Session);


  return (
    <div>
      <input type="text" placeholder="Session Id" name="session_id" onChange={handleChange}/>
      <label for="term">Term:</label>

    <select name="term" id="term" onChange={handleChange}>
        <option value="">--Select Term--</option>
        <option value="odd">ODD</option>
        <option value="even">EVEN</option>
    </select>
      <input type="number" placeholder="From Year" name="year" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddSession
