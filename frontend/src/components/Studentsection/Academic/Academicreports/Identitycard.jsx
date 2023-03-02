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
    Branch: "",
    Degree: "",
    // semester: "",
  });

  const [studentlist, setstudentlist] = useState([]);

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

  const fetchStudents = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/identitycard", IdentityCard);
      setstudentlist(res.data);
      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
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
    fetchStudents();
    // fetchBranchCode(Branch);
  }, []);


  const generate = (IdentityCard) => {
    const { Branch, Degree, admission_batch } = IdentityCard;


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
          name="Degree"
          placeholder="Select Degree"
          className="form-select-Degree"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Degree --</option>
          {Degree.map((Degree) => (
            <option value={Degree.degree_name}>{Degree.degree_name}</option>
          ))}
        </select>
      </label>
      &nbsp;&nbsp;
      <label>
        Branch:
        <select
          name="Branch"
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
      <button type="button" className="Generate" value="Get" onclick="GetSelected()">
        Generate
      </button>
      <div>
          <table id="studentList">
            {studentlist.map((student) => (
              <tr>
                <td>
                  <input
                    id="chkMango"
                    name={student.First_Name}
                    type="checkbox"
                    value={student.roll_no}
                    // checked={checkedItems.student.First_Name}
                    onChange={handleChange}
                  />
                  <label for="chkMango">{student.First_Name}</label>
                </td>
              </tr>
            ))}
          </table>
          {/* <p>Selected items: {JSON.stringify(checkedItems)}</p> */}
          <br />
        </div>

    </div>


    </>
  )
}

export default IdentityCard
