import React, { useEffect } from 'react'
import { useState, } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function AddStructure() {
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

  const navigate = useNavigate();
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

  const [scheme, setScheme] = useState([]);
  const [category, setCategory] = useState([]);
  const [semester, setSem] = useState([]);
  const [branch, setBranch] = useState([]);
  const [b_o_s, setB_o_s] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/scheme")
      .then((response) => {
        setScheme(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/semester")
      .then((response) => {
        setSem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/branch")
      .then((response) => {
        setBranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/b_o_s")
      .then((response) => {
        setB_o_s(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  //   console.log(branch);
  return (
    <div className="form">
      <b>--- ADD STRUCTURE ---</b>

      <br></br>

      <input type="number" placeholder="Structure Id" name="structure_id" onChange={handleChange} />
      {/* <input type="text" placeholder="category" name="category" onChange={handleChange}/>
    <input type="text" placeholder="Semester" name="semester" onChange={handleChange}/>
    <input type="number" placeholder="Branch Id" name="branch_id" onChange={handleChange}/>
    <input type="text" placeholder="Board of Study" name="board_of_study" onChange={handleChange}/> */}

      <select
        name="Scheme_id"
        placeholder="Scheme_id"
        className="form-select-case"
        onChange={handleChange}
        required
      >
        <option value="">-- Select scheme --</option>
        {scheme.map((item) => (
          <option key={item.scid} value={item.scid}>
            {item.scid}
          </option>
        ))}
      </select>

      <select
        name="category"
        placeholder="category"
        className="form-select-case"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Category --</option>
        {category.map((item) => (
          <option key={item.category_name} value={item.category_name}>
            {item.category_name}
          </option>
        ))}
      </select>

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

      <select
        name="board_of_study"
        placeholder="Branch id"
        className="form-select-case"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Branch --</option>
        {branch.map((item) => (
          <option key={item.Branch_name} value={item.Branch_name}>
            {item.Branch_name}
          </option>
        ))}
      </select>

      <select
        name="Scheme_id"
        placeholder="Scheme_id"
        className="form-select-case"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Board of Study --</option>
        {b_o_s.map((item) => (
          <option key={item.bos_name} value={item.bos_name}>
            {item.bos_name}
          </option>
        ))}
      </select>
      <select className='form-select-case' onChange={handleChange} >
          <option>Lecture</option>
          <option>Practical</option>
          <option>Tutorial</option>
      </select>
      <input type="text" placeholder="Course Code" name="coursecode" onChange={handleChange} />
      <input type="text" placeholder="Course Name" name="coursename" onChange={handleChange} />
      {/* <input type="number" placeholder="Lecture" name="lecture" onChange={handleChange}/>
      <input type="number" placeholder="Tutorial" name="tut" onChange={handleChange}/>
      <input type="number" placeholder="Practical" name="pract" onChange={handleChange}/> */}
      <input type="number" placeholder="In Sem 1" name="ise1" onChange={handleChange} />
      <input type="number" placeholder="In Sem 2" name="ise2" onChange={handleChange} />
      <input type="number" placeholder="In Sem 3" name="ise3" onChange={handleChange} />
      <input type="number" placeholder="PR" name="PR" onChange={handleChange} />
      <input type="number" placeholder="TW" name="TW" onChange={handleChange} />
      <input type="number" placeholder="End Sem" name="ese" onChange={handleChange} />
      <input type="number" placeholder="Total Marks" name="total_marks" onChange={handleChange} />
      <input type="number" placeholder="Total Credits" name="total_credits" onChange={handleChange} />
      <br />
      <br />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddStructure