import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RollNoGeneration() {
  const [batch, setBatch] = useState([]);
  const [Degree, setDegree] = useState([]);
  const [branch, setBranch] = useState([]);
  const [sem, setSem] = useState([]);
  const [rollGen, setRollGen] = useState({
    admission_batch: "",
    department: "",
    degree: "",
    semester: "",
  });
  const [SData, SetSData] = useState([]);
  const [mapData, setMapData] = useState({name: ""})




  const fetchBatch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/batch");
      setBatch(res.data);
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

  const fetchSem = async () => {
    try {
      const res = await axios.get("http://localhost:3001/semester");
      setSem(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDegree = async () => {
    try {
      const res = await axios.get("http://localhost:3001/degree");
      setDegree(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const generate = (rollGen, SData, name) => {
    const { admission_batch, department, degree, semester } = rollGen;
    
    for (let i = 0; i < SData.length; i++) {
      var { First_Name, Middle_Name, Last_Name } = SData[i]
      var name = First_Name+" "+Middle_Name+" "+Last_Name
      setMapData((prev) => ({ ...prev, name }));
      console.log(mapData);
    }
    
    // console.log(First_Name)
    // console.log(Middle_Name)
    // console.log(Last_Name)
    var d = "";
    var t = "";
    var s = "";

    // const { branchId, branchName } = department;
    console.log(department[0]);
    console.log(department.slice(2));
    var branchCode = department[0];
    if (department[0].length === 1) {
      branchCode = "0" + department[0];
    } else {
      branchCode = department[0];
    }

    if (degree === "B.Tech") {
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

    if (semester === "I" || semester === "II") s = "F";
    else s = "S";

    const batchCode = admission_batch.slice(-2);

    return d + batchCode + s + branchCode + t + "037";
  };

  useEffect(() => {
    fetchBatch();
    fetchBranch();
    fetchDegree();
    fetchSem();
  }, []);

  const handleChange = (e) => {
    setRollGen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    generate(rollGen, SData);
    console.log(generate(rollGen, SData));
  };

  const handleShow = async (rollGen) => {
    const { admission_batch, department, degree, semester } = rollGen
    const dept = department.slice(2);
    try {
      const res = await axios.get("http://localhost:3001/rollgen?admission_batch="+admission_batch+"&department="+dept+"&degree="+degree+"&semester="+semester);
      SetSData(res.data);
      console.log(res.data)
    } catch (err) {
      console.log(err);
    }
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
          {batch.map((batch) => (
            <option value={batch.year}>{batch.year}</option>
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
          {Degree.map((degree) => (
            <option value={degree.degree_name}>{degree.degree_name}</option>
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
            <option value={[branch.Branch_id, branch.Branch_name]}>
              {branch.Branch_id}.{branch.Branch_name}
            </option>
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
          {sem.map((sem) => (
            <option value={sem.sem}>{sem.sem}</option>
          ))}
        </select>
      </label>
      <div>
        <button className="Show" onClick={() => handleShow(rollGen)}>Show</button>
        <button className="submit" onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default RollNoGeneration;
