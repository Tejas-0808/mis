import React from 'react'
import { useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function Update() {
  const [branch, setBranch] = useState({
    Branch_id: "",
    Branch_name: "",
    HOD: "",
    Students_enrolled: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  
  const B_id = location.pathname.split("/")[2];

  const fetchBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/branch/"+ B_id,{
          headers: { authorization: localStorage.getItem('token') }
        });
        setBranch(res.data);
        // console.log(res.data+"!");
        console.log(branch);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchBranch();
    // eslint-disable-next-line
  }, []);


  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
        e.preventDefault();
        try {
          await axios.put("http://localhost:3001/branch/" + B_id, branch,{
            headers: { authorization: localStorage.getItem('token') }
          });
          navigate("/branch");
        } catch (err) {
          console.log(err);
        }
      };

  return (
    <div className="form">
      Update Branch
      <br/>
      <input type="number" placeholder="ID" name="Branch_id" value={branch.Branch_id} onChange={handleChange}/>
      <input type="text" placeholder="Brach Name" name="Branch_name" value={branch.Branch_name} onChange={handleChange}/>
      <input type="text" placeholder="HOD " name="HOD" value={branch.HOD} onChange={handleChange}/>
      <input type="number" placeholder="Student enrolled" name="Students_enrolled" value={branch.Students_enrolled} onChange={handleChange}/>
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update

