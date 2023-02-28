import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Addscheme() {
  const [CourseCategory, setCourseCategory] = useState([]);
  const [MasterScheme, setMasterScheme] = useState([]);
  const [scheme, setScheme] = useState({
    scid: "",
    master_sch_id: "",
    category: "",
    ft: "",
    pt: ""
  });

  const fetchCourseCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/course_category");
      setCourseCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMasterScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/master_scheme");
      setMasterScheme(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMasterScheme();
    fetchCourseCategory();
  }, [])

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
      <input type="number" placeholder="ID" name="scid" onChange={handleChange} />
      <label>
        Master Scheme ID:
        <select
          name="master_sch_id"
          placeholder="Master id"
          className="form-select-MasterschemeId"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Masterscheme ID --</option>
          {MasterScheme.map((MasterScheme) => (
            <option value={MasterScheme.mastersch_id}>{MasterScheme.mastersch_id}</option>
          ))}
        </select>
      </label>
      <label>
        Category:
        <select
          name="category"
          placeholder="Category"
          className="form-select-MasterschemeId"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Course Category --</option>
          {CourseCategory.map((CourseCategory) => (
            <option value={CourseCategory.name}>{CourseCategory.name}</option>
          ))}
        </select>
      </label>
      <input type="number" placeholder="ft" name="ft" onChange={handleChange} />
      <input type="number" placeholder="pt" name="pt" onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Addscheme

