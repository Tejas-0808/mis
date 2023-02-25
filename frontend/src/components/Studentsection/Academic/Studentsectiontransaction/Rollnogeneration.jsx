import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RollNoGeneration() {
  const [SData, setSData] = useState([]);
  const [rollGen, setRollGen] = useState({
    admission_batch: "",
    department: "",
    degree: "", 
    semester: ""
  });
  

  const Degree = rollGen.degree;
  const Adm_batch = rollGen.admission_batch
  const dept = rollGen.department
  const sem = rollGen.semester 
  console.log(Degree)

  // const generate = (Degree, Adm_batch, dept, sem) => {
  //   if(Degree)
  // }


  const fetchAllSData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/student");
      setSData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllSData();
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRollGen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async(e) => {
    e.preventDefault();
  }

  



  return (
    <div>
      <h2>Roll Number Generation</h2>

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
          {SData.map((batch) => (
            <option value={batch.Admission_batch}>
              {batch.Admission_batch}
            </option>
          ))}
        </select>
      </label>

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
          {SData.map((branch) => (
            <option value={branch.Branch}>{branch.Branch}</option>
          ))}
        </select>
      </label>

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
          {SData.map((degree) => (
            <option value={degree.Degree}>{degree.Degree}</option>
          ))}
        </select>
      </label>

      <label>
        Semester:
        <select
          name="semester"
          placeholder="Select Semester"
          className="form-select-semester"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Semester --</option>
          {SData.map((sem) => (
            <option value={sem.Semester}>{sem.Semester}</option>
          ))}
        </select>
      </label>
      <div>
            <button className="submit" onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

export default RollNoGeneration;
