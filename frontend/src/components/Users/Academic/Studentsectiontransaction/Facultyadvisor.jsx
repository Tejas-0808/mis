import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

import { InputLabel, FormControl, Select, MenuItem, Button, Box, Card, CardContent, CardHeader } from '@mui/material/';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

function Facultyadvisor() {
  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: "",
    Facultyadvisor: ""
  });

  const [studentlist, setstudentlist] = useState([]);

  const navigate = useNavigate();


  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [semester, setsemester] = useState([]);
  const [batch, setbatch] = useState([]);
  const [faculty_advisor, setFa] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/degree", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/branch", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setbranch(response.data);

      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/semester", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/batch", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setbatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });


  }, []);

  console.log(faculty_advisor);
  console.log(Rolllists.Branch.slice(0, 1));

  const handleChange = async (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }



  console.log(Rolllists);

  const [checkedValues, setCheckedValues] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetchStudents = async (e) => {
    setCheckedValues([]);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/studentrolllists", Rolllists);
      setstudentlist(res.data);
      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }

    axios.get("http://localhost:3001/staff_details/" + Rolllists.Branch.slice(0, 1))
      .then((response) => {
        setFa(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const handleSelectAll = (event) => {
    const { checked } = event.target;
    if (checked) {
      // Select all students
      const allRollNos = studentlist.map((student) => student.roll_no);
      console.log(allRollNos);
      setCheckedValues(allRollNos);
      setSelectAll(true);
    } else {
      // Deselect all students
      setCheckedValues([]);
      setSelectAll(false);
    }
  };

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }
  }

  const handleUpdateButtonClick = () => {
    const newData = Rolllists.Facultyadvisor;
    console.log(newData);
    if (checkedValues.length > 0) {
      axios.post('http://localhost:3001/assignfaculty', {
        checkedValues: checkedValues,
        newData: newData,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const selectedCount = checkedValues.length;

  console.log(Rolllists);
  return (
    <div style={{ height: '100vh', width: '100%' }}>

      <Box sx={{ width: '100%', height: '100%' }}>

        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>

          <CardContent>
            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="Faculty Advisor"
            />



            <div style={{ padding: '15px' }}  >
              {/* <Grid container spacing={2} sx={{ width: '100%' }}> */}
              <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Degree</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="Degree"
                      label="Select Degree"
                      className="form-select-degree"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        None
                      </MenuItem>
                      {degree.map((item) => (
                        <MenuItem key={item.degree_id} value={item.degree_name}>
                          {item.degree_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="Branch"
                      placeholder="Select Branch"
                      className="form-select-branch"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        None
                      </MenuItem>
                      {branch.map((item) => (
                        <MenuItem key={item.Branch_id} value={item.Branch_id + "," + item.Branch_name}>
                          {item.Branch_id}.{item.Branch_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="Semester"
                      placeholder="Select Semester"
                      className="form-select-semester"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        None
                      </MenuItem>
                      {semester.map((item) => (
                        <MenuItem key={item.sem_id} value={item.sem}>
                          {item.sem}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth required variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-required-label" htmlFor='batch' >Batch</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="batch"
                      name="Batch"
                      placeholder="Select Batch"
                      className="form-select-batch"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        <option value="">None</option>
                      </MenuItem>
                      {batch.map((item) => (
                        <MenuItem key={item.batch_id} value={item.year}>
                          {item.year}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>

              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
                <Button variant="contained" onClick={fetchStudents}>Show Student</Button>
              </div>
              {/* <Button variant="contained" onClick={fetchStudents}>Fetch</Button> */}

              <br></br>
              <div className="facultyadv">
                <div>
                  {/* <p>Selected items: {JSON.stringify(checkedValues)}</p> */}
                  <br />
                  <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '16px' }}>
                    <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                      <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-label">Faculty Advisor</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          name="Facultyadvisor"
                          placeholder="Select FA"
                          className="form-select-fa"
                          onChange={handleChange}
                          required
                        >
                          <MenuItem value="">
                            -- Select FA --
                          </MenuItem>
                          {faculty_advisor.map((item) => (
                            <MenuItem key={item.staffID} value={item.staffID}>
                              {item.First_Name + " " + item.Last_Name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
                      <Button variant="contained" onClick={handleUpdateButtonClick} >Assign FA</Button>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                      <TextField label="Total Selected Students" variant="filled" value={selectedCount} sx={{ mt: 2 }} />

                    </Grid>
                  </Grid>

                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>



                  </div>

                  <br />
                  <br />

                  {/* <table id="studentList">
                  {studentlist.map((student) => (
                    <table>
                      <tr>
                        <td>
                          <div key={student.roll_no}>
                            <input
                              type="checkbox"
                              value={student.roll_no}
                              checked={checkedValues.includes(student.roll_no)}
                              onChange={handleCheckboxChange}
                            />
                            <span>{student.roll_no}</span>
                             </div>
                        </td>
                      </tr>
                    </table>
                  ))}
                </table> */}
                  <h2>Student List</h2>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead style={{ backgroundColor: '#1976d2' }}>

                        <TableRow>
                          <TableCell align="center">
                            <input
                              type="checkbox"
                              checked={selectAll}
                              onChange={handleSelectAll}
                            />
                          </TableCell>
                          <TableCell align="center">Roll No</TableCell>
                          {/* <TableCell align="right">Session ID</TableCell> */}
                          <TableCell align="center">Name</TableCell>
                          <TableCell align="center">Branch</TableCell>
                          <TableCell align="center">FA Name</TableCell>
                        </TableRow>

                      </TableHead>
                      <TableBody>
                        {studentlist.map((student) => (
                          <TableRow
                            key={student.roll_no}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            {/* <TableCell component="th" scope="row">

                        </TableCell> */}
                            <TableCell align="center">
                              <div key={student.roll_no}>

                                <input
                                  type="checkbox"
                                  value={student.roll_no}
                                  checked={checkedValues.includes(student.roll_no)}
                                  onChange={handleCheckboxChange}
                                />
                                {/* <input type="text" value={item.value} onChange={(event) => handleInputChange(event, item.id)} /> */}
                              </div>
                            </TableCell>
                            <TableCell align="center">{student.roll_no}</TableCell>
                            <TableCell align="center">{student.First_Name + " " + student.Middle_Name + " " + student.Last_Name}</TableCell>
                            <TableCell align="center">{student.Branch}</TableCell>
                            {/* <TableCell align="center">{student['FA Name']}</TableCell> */}
                            <TableCell align="center">
                              {student['FA Name'] ? student['FA Name'] : 'NULL'}
                            </TableCell>

                            {/* < button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
                      &nbsp;&nbsp;
                      <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button> */}
                          </TableRow>

                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Box>

    </div>

  );
}

export default Facultyadvisor;
