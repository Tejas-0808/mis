import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddStructure() {
  const [Scheme, setScheme] = useState([]);
  const [Category, setCategory] = useState([]);
  const [semester, setSem] = useState([]);
  const [Branch, setBranch] = useState([]);
  const [Bos, setBos] = useState([]);
  const [Structure, setStructure] = useState({
    structure_id: "",
    coursecode: "",
    coursename: "",
    lecture: "",
    tut: "",
    pract: "",
    ise1: "",
    ise2: "",
    ise3: "",
    PR: "",
    TW: "",
    ese: "",
    total_marks: "",
    total_credits: ""
  });

  const fetchScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/scheme");
      setScheme(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/course_category");
      setCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  axios.get("http://localhost:3001/semester")
      .then((response) => {
        setSem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch");
      setBranch(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/b_o_s");
      setBos(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchScheme();
    fetchCategory();
    fetchBranch();
    fetchBos();
  }, []);
  
  const handleChange = (e) => {
    setStructure((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/structure", Structure);
      navigate("/structure");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  return (
    <div className="form">
      ADD Structure
      <br></br><br></br>
      &nbsp;&nbsp;
      <input type="number" placeholder="Structure Id" name="strid" onChange={handleChange}/>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label>
        Scheme:
        <select
          name="scheme_id"
          placeholder="Select Scheme"
          className="form-select-scheme"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Scheme ID --</option>
          {Scheme.map((Scheme) => (
            <option value={Scheme.scid}>{Scheme.scid}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Category:
        <select
          name="category"
          placeholder="Select Category"
          className="form-select-category"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Course Category --</option>
          {Category.map((Category) => (
            <option value={Category.name}>{Category.name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <select
        name="semester"
        placeholder="Board of Study"
        className="form-select-case"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Semester --</option>
        {semester.map((item) => (
          <option key={item.sem} value={item.sem}>
            {item.sem}
          </option>
        ))}
      </select>
      &nbsp;&nbsp;
      <label>
        Branch ID:
        <select
          name="branch_id"
          placeholder="Select Branch Id"
          className="form-select-BranchId"
          onChange={handleChange}
          required
        >
          <option value="">-- Select BranchId --</option>
          {Branch.map((Branch) => (
            <option value={Branch.Branch_id}>{Branch.Branch_id}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        BOS:
        <select
          name="board_of_study"
          placeholder="Select BOS"
          className="form-select-Bos"
          onChange={handleChange}
          required
        >
          <option value="">-- Select BOS --</option>
          {Bos.map((Bos) => (
            <option value={Bos.bos_name}>{Bos.bos_name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <input type="text" placeholder="Course Code" name="coursecode" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="text" placeholder="Course Name" name="coursename" onChange={handleChange}/>
      &nbsp;&nbsp;<br></br><br></br>
      <input type="number" placeholder="Lecture" name="lecture" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="Tutorial" name="tut" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="Practical" name="pract" onChange={handleChange}/>
      <h3></h3>
      &nbsp;&nbsp;<br></br><br></br>
      <input type="number" placeholder="In Sem 1" name="ise1" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="In Sem 2" name="ise2" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="In Sem 3" name="ise3" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="PR" name="PR" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="TW" name="TW" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="End Sem" name="ese" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="Total Marks" name="total_marks" onChange={handleChange}/>
      &nbsp;&nbsp;
      <input type="number" placeholder="Total Credits" name="total_credits" onChange={handleChange}/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddStructure