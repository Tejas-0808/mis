import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function NewStudent() {
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
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/caste')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <div className="form">
      NEW STUDENT ENTRY
      <input type="number" placeholder="reg_id" name="Reg_Id" onChange={handleChange}/>
      <input type="text" placeholder="First Name" name="First_Name" onChange={handleChange}/>
      <input type="text" placeholder="Middle Name" name="Middle_Name" onChange={handleChange}/>
      <input type="text" placeholder="Last Name" name="Last_Name" onChange={handleChange}/>
      <input type="email" placeholder="Email id" name="Email_id" onChange={handleChange}/>
      <input type="number" placeholder="Phone No" name="Phone_No" onChange={handleChange}/>
      <input type="date" placeholder="dob" name="D.O.B" onChange={handleChange}/>
      <input type="text" placeholder="bloodgroup" name="Blood_group" onChange={handleChange}/>
      <input type="text" placeholder="caste" name="Caste" onChange={handleChange}/>
      <input type="text" placeholder="category" name="Category" onChange={handleChange}/>
      <input type="text" placeholder="Admission Category" name="AdmissionCategory" onChange={handleChange}/>
      <input type="text" placeholder="caste" name="Caste" onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="students_enrolled" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default NewStudent

