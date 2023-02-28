import React from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Addscheme() {
  const [SubjCategory, setSubjCategory] = useState([]);
  const [MasterScheme, setMasterScheme] = useState([]);
  const [scheme, setScheme] = useState({
    scid: "",
    master_sch_id: "",
    category: "",
    ft: "",
    pt: ""
  });

  const fetchSubjCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/subjcategory");
      setSubjCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMasterScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/Masterscheme");
      setMasterScheme(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
      <label>
        Department:
        <select
          name="master_sch_id"
          placeholder="Master id"
          className="form-select-MasterschemeId"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Masterscheem ID --</option>
          {MasterScheme.map((MasterScheme) => (
            <option value={MasterScheme.master_sch_id}>{MasterScheme.master_sch_id}</option>
          ))}
        </select>
      </label>
      <input type="text" placeholder="Category" name="category" onChange={handleChange}/>
      <input type="number" placeholder="ft" name="ft" onChange={handleChange}/>
      <input type="number" placeholder="pt" name="pt" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Addscheme

