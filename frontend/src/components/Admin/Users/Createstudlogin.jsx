import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
} from "@mui/material/";

function Createstudlogin(props) {
  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: ""
  });

  const [studentlist, setstudentlist] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showInput, setShowInput] = useState(false);


  const navigate = useNavigate();

  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [batch, setbatch] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);
 const semester = [
    { sem_id: 1, sem: "I" },
    { sem_id: 2, sem: "III" },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3001/degree")
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setbranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // axios
    //   .get("http://localhost:3001/semester")
    //   .then((response) => {
    //     setsemester(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    axios
      .get("http://localhost:3001/batch")
      .then((response) => {
        setbatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(Rolllists.Branch.slice(0, 1));

  const handleChange = async (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log("Roll" + Rolllists);

  const fetchStudents = async (e) => {
    setCheckedValues([]);
    setShowInput(true);
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/studentrolllists",
        Rolllists
      );
      setstudentlist(res.data);
      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }

   
  };

  console.log(studentlist);

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  }
  const handleSelectAllChange = (e) => {
    
    setSelectAll(e.target.checked);
    if (e.target.checked) {
      const allRollNos = studentlist.map((student) => student.roll_no);
      setCheckedValues(allRollNos);
    } else {
      setCheckedValues([]);
    }
  };


  const handleUpdateButtonClick = async (e) => {
    e.preventDefault();
  
    const selectedStudents = studentlist.filter((student) => checkedValues.includes(student.roll_no));
    
    // Make an API call to insert the student names as passwords into the login table
    const users = selectedStudents.map((student) => ({
      username: student.roll_no,
      password: student.roll_no, // Using the student's name as the password is not secure!
      role_id: props.selectedRoleId,
    }));
    
    console.log(typeof(users));
  
    try {
      await axios.post("http://localhost:3001/studpassword", users);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
    // const newData = Rolllists.Facultyadvisor;
    // console.log(newData);
    // if (checkedValues.length > 0) {
    //   axios
    //     .post("http://localhost:3001/assignfaculty", {
    //       checkedValues: checkedValues,
    //       newData: newData,
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    //   navigate("/");
    // }
    navigate("/");
  };

  console.log(Rolllists);
  return (
    <Box>
      <div>
        <h1>Student Login</h1>
        <hr></hr>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Degree</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Degree"
            label="Select Degree"
            className="form-select-degree"
            onChange={handleChange}
            required
          >
            <MenuItem value="">None</MenuItem>
            {degree.map((item) => (
              <MenuItem key={item.degree_id} value={item.degree_name}>
                {item.degree_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Branch"
            placeholder="Select Branch"
            className="form-select-branch"
            onChange={handleChange}
            required
          >
            <MenuItem value="">None</MenuItem>
            {branch.map((item) => (
              <MenuItem
                key={item.Branch_id}
                value={item.Branch_id + "," + item.Branch_name}
              >
                {item.Branch_id}.{item.Branch_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Semester"
            placeholder="Select Semester"
            className="form-select-semester"
            onChange={handleChange}
            required
          >
            {/* <MenuItem value="">
              None
            </MenuItem>
            {semester.map((item) => (
              <MenuItem key={item.sem_id} value={item.sem}>
                {item.sem}
              </MenuItem>
            ))} */}
            <MenuItem value="">None</MenuItem>
            {semester.map((semester) => (
              <MenuItem key={semester.sem_id} value={semester.sem}>
                {semester.sem}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Batch"
            placeholder="Select Batch"
            className="form-select-batch"
            onChange={handleChange}
            required
          >
            <MenuItem value="">
              <option value="">None</option>
            </MenuItem>
            {batch
              .sort((a, b) => b.batch_id - a.batch_id)
              .slice(0, 1)
              .map((item) => (
                <MenuItem key={item.batch_id} value={item.year}>
                  {item.year}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <Button variant="contained" onClick={fetchStudents}>
          Fetch
        </Button>
        <br></br>
        <br></br>

        <div className="facultyadv">
          
          <div>
            <table>
          <thead>
          {showInput &&
            <tr>
           
              <th>
               
              <input
                  label="rollnos"
                  type="checkbox"
                  checked={checkedValues.length === studentlist.length}
                  onChange={handleSelectAllChange}
                />
              </th>
              
              <th>Roll No</th>
            </tr>}
          </thead>
          <tbody>
            {studentlist.map((student) => (
              <tr key={student.roll_no}>
                <td>
                  <input
                    type="checkbox"
                    value={student.roll_no}
                    checked={checkedValues.includes(student.roll_no)}
                    onChange={handleCheckboxChange}
                  />
                </td>
                <td>{student.roll_no}</td>
              </tr>
            ))}
          </tbody>
        </table>

            <p>Selected items: {JSON.stringify(checkedValues)}</p>
            <br />

            {/* <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Facultyadvisor"
                placeholder="Select FA"
                className="form-select-fa"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select FA --</MenuItem>
                {faculty_advisor.map((item) => (
                  <MenuItem key={item.staffID} value={item.staffID}>
                    {item.First_Name + " " + item.Last_Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            <Button variant="contained" onClick={handleUpdateButtonClick}>
              Create Passwords
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Createstudlogin;
