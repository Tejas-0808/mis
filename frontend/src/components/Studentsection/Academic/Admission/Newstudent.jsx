import React from 'react'
import { useState, useEffect} from 'react';
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
 
  
      


  const [caste, setCaste] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/caste')
      .then(response => {
        setCaste(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/category')
      .then(response => {
        setCategory(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const [religion, setReligion] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/religion')
      .then(response => {
        setReligion(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const [selectedOption, setSelectedOption] = useState(null);
  const handleCheckboxChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="form">
      NEW STUDENT ENTRY
      <hr></hr>
      <br></br>
      <input type="number" placeholder="reg_id" name="Reg_Id" onChange={handleChange}/>
      <input type="text" placeholder="First Name" name="First_Name" onChange={handleChange}/>
      <input type="text" placeholder="Middle Name" name="Middle_Name" onChange={handleChange}/>
      <input type="text" placeholder="Last Name" name="Last_Name" onChange={handleChange}/>
      <input type="email" placeholder="Email id" name="Email_id" onChange={handleChange}/>
      <input type="number" placeholder="Phone No" name="Phone_No" onChange={handleChange}/>
      <input type="date" placeholder="dob" name="D.O.B" onChange={handleChange}/>
      <input type="text" placeholder="bloodgroup" name="Blood_group" onChange={handleChange}/>
      <select name="dropdown" placeholder="Select caste" className="form-select-caste" onChange={handleChange} required>
      <option value="">-- Select caste --</option>
      {caste.map(item=> (
        <option key={item.caste_id} value={item.caste_id}>{item.caste_name}</option>
      ))}
      </select>
   
    <select name="dropdown" placeholder="Select Category" className="form-select-category" onChange={handleChange} required>
      <option value="">-- Select category --</option>
      {category.map((item) => (
        <option key={item.category_id} value={item.category_id}>{item.category_name}</option>
      ))}
    </select>
    <select name="dropdown" placeholder="Select Religion" className="form-select-religion" onChange={handleChange} required>
      <option value="">-- Select Religion --</option>
      {religion.map(item => (
        <option key={item.religion_id} value={item.religion_id}>{item.Religion_name}</option>
      ))}
    </select>
    <h5>
      Martial Status
    </h5>
    <label>
        <input
          type="checkbox"
          name="married"
          value="married"
          checked={selectedOption === 'married'}
          onChange={handleCheckboxChange}
        />
        Married
      </label>
      <label>
        <input
          type="checkbox"
          name="unmarried"
          value="unmarried"
          checked={selectedOption === 'unmarried'}
          onChange={handleCheckboxChange}
        />
        Unmarried
      </label>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default NewStudent

