import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";


function IdentityCard() {
  const [Degree, setDegree] = useState([]);
  const [branch, setBranch] = useState([]);
  const [batch, setBatch] = useState([]);
  const [sem, setSem] = useState([]);
  const [IdentityCard, setIdentityCard] = useState({
    Batch: "",
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
    const { Branch, Degree, Batch } = IdentityCard;


    return null;
  };


  const handleChange = (e) => {
    setIdentityCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <h1>&nbsp;&nbsp;Academic Reports</h1><hr />
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Identity Card Generation"
          />

    <><div>
      &nbsp;&nbsp;
      <label>
        {/* Degree: */}
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
        {/* Branch: */}
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
        {/* Admission Batch: */}
        <select
          name="Batch"
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
      {/* <button type="button" className="Generate" value="Get" onClick={fetchStudents}>
        Generate
      </button> */}
       <Button variant="contained" className="Generate" value="Get" onClick={fetchStudents}size="medium" >Generate</Button>
      <div>
      {studentlist.map((student) => (
              <table>
                <tr>
                  <td>
                    <div key={student.roll_no}>
                      <input
                        type="checkbox"
                        value={student.roll_no}
                        // checked={checkedValues.includes(student.roll_no)}
                        // onChange={handleCheckboxChange}
                      /> &nbsp;&nbsp;
                      <span>{student.roll_no}</span> &nbsp;&nbsp;
                      <span>{student.First_Name}</span> &nbsp;&nbsp;
                      <span>{student.Middle_Name}</span> &nbsp;&nbsp;
                      <span>{student.Last_Name}</span> &nbsp;&nbsp;
                      <span>{student.Branch}</span> &nbsp;&nbsp;
                      <span>{student.Phone_No}</span> &nbsp;&nbsp;
                      <span>{student.Blood_grp}</span> &nbsp;&nbsp;
                      <span>{student.D_O_B}</span> &nbsp;&nbsp;
                      <span>{student.Permanent_Add}</span> &nbsp;&nbsp;
                    </div>
                  </td>
                </tr>
              </table>
            ))}
        </div>

    </div>


    </>
    </Box>
      </CardContent>
    </Card>
  )
}

export default IdentityCard
