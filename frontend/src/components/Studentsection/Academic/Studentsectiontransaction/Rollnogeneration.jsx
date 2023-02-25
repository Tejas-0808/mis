import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RollNoGeneration() {
  const [SData, setSData] = useState([]);
  const [rollGen, setRollGen] = useState({
    admission_batch: "",
    department: "",
    degree: "",
    semester: "",
  });
  const [branch, setBranch] = useState([]);

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch");
      setBranch(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const generate = (rollGen) => {
    const { admission_batch, department, degree, semester } = rollGen;
    var d = "";
    var t = "";
    var s = "";

    function fetchBranchCode(department) {
      try {
        (async () => {
          const res = await axios.get(
            "http://localhost:3001/branch/" + department
          );
          return res.data;
        })();
      } catch (err) {
        console.log(err);
      }
    }
    var branchCode = fetchBranchCode(department);

    if (degree === "B.tech") {
      d = "BT";
      t = "F";
    } else if (degree === "M.Tech") {
      d = "MT";
      t = "F";
    } else if (degree === "MCA") {
      d = "MCA";
      t = "F";
    } else if (degree === "B.Tech PART TIME") {
      d = "BT";
      t = "P";
    } else if (degree === "M.Tech PART TIME") {
      d = "MT";
      t = "P";
    }

  // console.log(rollGen);

  const generate = (rollGen) => {
    console.log(rollGen);
    const {degree, admission_batch, semester, department} = rollGen;
    

  }

    return d + batchCode + s + branchCode + t + "037";
  };

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
    fetchBranch();
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRollGen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    generate(rollGen);
    console.log(generate(rollGen));
  };

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
          {branch.map((branch) => (
            <option value={branch.Branch_name}>{branch.Branch_name}</option>
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
        <button className="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default RollNoGeneration;
