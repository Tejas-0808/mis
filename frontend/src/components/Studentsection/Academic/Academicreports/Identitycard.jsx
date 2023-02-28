import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function IdentityCard() {
  const [Degree, setDegree] = useState([]);
  const [branch, setBranch] = useState([]);
  const [batch, setBatch] = useState([]);
  const [sem, setSem] = useState([]);
  const [IdentityCard, setIdentityCard] = useState({
    admission_batch: "",
    department: "",
    degree: "",
    // semester: "",
  });

  const fetchDegree = async () => {
    try {
      const res = await axios.get("http://localhost:3001/degree");
      setDegree(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch");
      setBranch(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBatch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/batch");
      setBatch(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSem = async () => {
    try {
      const res = await axios.get("http://localhost:3001/semester");
      setSem(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchBatch();
    fetchBranch();
    fetchDegree();
    fetchSem();
    // fetchBranchCode(department);
  }, []);


  const generate = (IdentityCard) => {
    const { department, degree, admission_batch } = IdentityCard;


    return null;
  };


  const handleChange = (e) => {
    setIdentityCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    generate(IdentityCard);
    console.log(generate(IdentityCard));
  };

  return (
    <><div>
      <h1>
        Identity Card Generation
      </h1>
      &nbsp;&nbsp;
      <label>
        Degree:
        <select
          name="degree"
          placeholder="Select Degree"
          className="form-select-degree"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Degree --</option>
          {Degree.map((degree) => (
            <option value={degree.degree_name}>{degree.degree_name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Department:
        <select
          name="department"
          placeholder="Select Branch"
          className="form-select-branch"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Branch --</option>
          {branch.map((branch) => (
            <option value={branch.Branch_name}>{branch.Branch_name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Admission Batch:
        <select
          name="admission_batch"
          placeholder="Select Admission Batch"
          className="form-select-batch"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Batch --</option>
          {batch.map((batch) => (
            <option value={batch.year}>{batch.year}</option>
          ))}
        </select>
      </label>

      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="Generate" onClick={handleClick}>
        Generate
      </button>
      <div className=''>
        {IdentityCard.map((IdentityCard) => (
          <div className="IdentityCard">
            <p>{IdentityCard.department}</p>
            <p>{IdentityCard.admission_batch}</p>
            <p>{IdentityCard.degree_name}</p>
          </div>
        ))}
      </div>

    </div>


    </>
  )
}

export default IdentityCard
