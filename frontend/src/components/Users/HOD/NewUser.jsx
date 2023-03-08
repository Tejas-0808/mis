import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';

function NewUser() {

  const [staffdetails, setStaffDetails] = useState({
First_Name:"",
Middle_Name:"",
Last_Name:"",
Branch_id:"",
Qualifications:"",
role_id:"",
Email_id:"",
Phone_no:"",
Address:"",
Gender:"",
Marital_Status:""
   
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    setStaffDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(staffdetails);
  };

  const handleClickadd = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:3001/newuser", staffdetails);
          navigate("/");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  const [branch, setBranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setBranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
   
  }, []);
  const [role, setRole] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/privilege")
      .then((response) => {
        setRole(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
   
  }, []);

  const [selectedMS, setSelectedMS] = useState(null);
  const handleCheckboxChange = (event) => {
    setSelectedMS(event.target.value);
    handleChange(event);
  };
  const [selectedGender, setSelectedGender] = useState(null);
  const handleCheckboxChange1 = (event) => {
    setSelectedGender(event.target.value);
    handleChange(event);
  };

  return (
    <div className="form">
        New User
        
      <hr></hr>
      <br></br>
     
      <input
        type="text"
        placeholder="First Name"
        name="First_Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Middle Name"
        name="Middle_Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="Last_Name"
        onChange={handleChange}
      />
      <select
        name="Branch_id"
        placeholder="Select Program"
        className="form-select-Program"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Program --</option>
        {branch.map((item) => (
          <option key={item.Branch_id} value={item.Branch_id}>
            {item.Branch_name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Qualifications"
        name="Qualifications"
        onChange={handleChange}
      />
      {/* <input
        type="text"
        placeholder="Role-Faculty"
        name="role_id"
        // onChange={handleChange}
        // value="4"
        defaultValue={"4"}
        readOnly
      /> */}
      <select
        name="role_id"
        placeholder="Select Role"
        className="form-select-Role"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Role --</option>
        {role.map((item) => (
          <option key={item.role_id} value={item.role_id}>
            {item.role}
          </option>
        ))} 
      </select>
      <input
        type="email"
        placeholder="Email id"
        name="Email_id"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Phone No"
        name="Phone_no"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Address"
        name="Address"
        onChange={handleChange}
      />
      <h5>Gender</h5>
      <label>
        <input
          type="radio"
          name="Gender"
          value="Female"
          checked={selectedGender === "Female"}
          onChange={handleCheckboxChange1}
        />
        Female
      </label>
      <label>
        <input
          type="radio"
          name="Gender"
          value="Male"
          checked={selectedGender === "Male"}
          onChange={handleCheckboxChange1}
        />
        Male
      </label>
      <h5>Martial Status</h5>
      <label>
        <input
          type="radio"
          name="Marital_Status"
          value="Married"
          checked={selectedMS === "Married"}
          onChange={handleCheckboxChange}
        />
        Married
      </label>
      <label>
        <input
          type="radio"
          name="Marital_Status"
          value="Unmarried"
          checked={selectedMS === "Unmarried"}
          onChange={handleCheckboxChange}
        />
        Unmarried
      </label>

      
      {/* <Button variant="contained">Hello World</Button> */}
      <Button variant="contained" onClick={handleClickadd}>Add</Button>
    </div>
  );
}

export default NewUser;
