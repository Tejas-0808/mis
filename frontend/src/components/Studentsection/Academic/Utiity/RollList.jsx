import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, } from "@mui/material";

const Rolllist = () => {

  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: ""
  });

  const [studentlist, setstudentlist] = useState([]);



//   useEffect(() => {

//     fetchAllrollno();
//     // eslint-disable-next-line
//   }, []);
  const navigate = useNavigate();

 // console.log(Rolllist);


  const handleChange = (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

const [degree, setdegree] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/degree")
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

const [branch, setbranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setbranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

const [semester, setsemester] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:3001/semester")
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

const [batch, setbatch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/batch")
      .then((response) => {
        setbatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchStudents = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3001/rolllist",Rolllists);
        setstudentlist(res.data);
        // setBranch(res.data);
        // console.log(res.data+"!");
        console.log(res.data);
       
    } catch(err) {
        console.log(err);
    }
}

  console.log(Rolllists);
  return (
    <Card sx={{ minWidth: 275 }}>
      <h1>&nbsp;&nbsp;Utility</h1><hr />
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 2, width: "25ch" }, whiteSpace: 'normal', border: 1 }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Roll List"
          />

    <div>
      <select
        name="Degree"
        placeholder="Select Degree"
        className="form-select-degree"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Degree --</option>
        {degree.map((item) => (
          <option key={item.degree_id} value={item.degree_name }>
            {item.degree_name}
          </option>
        ))}
      </select>
  
      <select
        name="Branch"
        placeholder="Select Branch"
        className="form-select-branch"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Branch --</option>
        {branch.map((item) => (
          <option key={item.Branch_id} value={item.Branch_name }>
            {item.Branch_name}
          </option>
        ))}
      </select>
      <select
        name="Semester"
        placeholder="Select Semester"
        className="form-select-semester"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Semester --</option>
        {semester.map((item) => (
          <option key={item.sem_id} value={item.sem }>
            {item.sem}
          </option>
        ))}
      </select>
      <select
        name="Batch"
        placeholder="Select Batch"
        className="form-select-batch"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Batch --</option>
        {batch.map((item) => (
          <option key={item.batch_id} value={item.year}>
            {item.year}
          </option>
        ))}
      </select>
      {/* <button onClick={fetchStudents}>fetch</button> */}
      &nbsp;&nbsp;
      <Button variant="contained" onClick={fetchStudents}size="medium" >Fetch</Button>
      <br></br>
      <br></br>
      {studentlist.map((student) => (
              <table>
                <tr>
                  <td>
                    <div key={student.roll_no}>
                      <span>{student.roll_no}</span>
                    </div>
                  </td>
                </tr>
              </table>
            ))}
    </div>
    </Box>
    </CardContent>
    </Card>
  )
}

export default Rolllist
