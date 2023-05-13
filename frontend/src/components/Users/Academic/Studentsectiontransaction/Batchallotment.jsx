import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { TextField, InputLabel, FormControl, Select, MenuItem, Button, Box, Card, CardContent, Grid, CardHeader, Table, TableContainer, TableBody, TableCell, TableHead, Paper, TableRow } from '@mui/material/';

function Batchallotment() {
  const [Batchlist, SetBatchlists] = useState({
    SessionID: "",
    Degree: "",
    Branch: "",
    Semester: "",
    SchemeID: "",
    CourseType: "",
    Course: "",
    Batch: "",
    Faculty: ""
  });

  const [studentlist, setstudentlist] = useState([]);

  const navigate = useNavigate();

  const [session, setSession] = useState([]);
  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [semester, setsemester] = useState([]);
  const [batch, setbatch] = useState(["T1", "T2", "T3", "T4", "T5"]);
  const [faculty_advisor, setFa] = useState([]);
  const [scheme, setscheme] = useState([]);
  const [course, setCourse] = useState([]);
  const [coursetype, setCoursetype] = useState(["Theory", "Practical", "Project"]);

  const [selectAll, setSelectAll] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:3001/session", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setSession(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

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
      .post("http://localhost:3001/courselist", Batchlist)
      .then((response) => {
        setCourse(response.data);
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
      .get("http://localhost:3001/master_scheme", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setscheme(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/staff_details/" + Batchlist.Branch)
      .then((response) => {
        setFa(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.post("http://localhost:3001/courselist1", Batchlist)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [Batchlist]);


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
  const fetchCourses = async (e) => {
    // setCheckedValues([]);
    e.preventDefault();
    try {

      const res = await axios.post(
        "http://localhost:3001/courselist1",
        Batchlist
      );
      setCourse(res.data);
      console.log(course)

    } catch (err) {
      console.log(err);
    }

  };

  const handleChange = async (e) => {
    SetBatchlists((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(Batchlist);

  const fetchstudents = async (e) => {
    setCheckedValues([]);
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3001/students/" + Batchlist.Course, {
        headers: { authorization: localStorage.getItem('token') }
      });
      // const res = await axios.post("http://localhost:3001/student", Batchlist);
      setstudentlist(res.data);
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }

  };

  const [checkedValues, setCheckedValues] = useState([]);

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;

    if (checked) {
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
    }
  }

  const handleUpdateButtonClick = () => {
    const Batch = Batchlist.Batch;
    const Faculty = Batchlist.Faculty;
    const Course = Batchlist.Course;
    if (checkedValues.length > 0) {
      axios.post('http://localhost:3001/assignbatch', {
        checkedValues: checkedValues,
        Faculty: Faculty,
        Batch: Batch,
        Course: Course,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      // navigate("/userdashboard");
    }
  };
  const selectedCount = checkedValues.length;


  console.log(Batchlist);
  return (
    <div style={{ height: '100%', width: '100%' }}>

      <Box sx={{ width: '100%', height: '100%' }}>
        {/* <Box> */}
        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>


          <CardContent>

            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="Batch Allotment"
            />


            <div style={{ padding: '15px' }}  >
              {/* <Grid container spacing={2} sx={{ width: '100%' }}> */}
              <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Session ID</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="SessionID"
                      placeholder="Select Session"
                      className="form-select-session"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        None
                      </MenuItem>
                      {session.map((item) => (
                        <MenuItem key={item.session_id} value={item.session_id}>
                          {item.session_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
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
                        <MenuItem key={item.degree_id} value={item.degree_id}>
                          {item.degree_name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
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
                        <MenuItem key={item.Branch_id} value={item.Branch_id}>
                          {item.Branch_name}
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
              </Grid>
              <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Scheme</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="SchemeID"
                      placeholder="Select Scheme"
                      className="form-select-scheme"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">-- Select Scheme --</MenuItem>
                      {scheme.map((item) => (
                        <MenuItem key={item.mastersch_id} value={item.mastersch_id}>
                          {item.master_scheme}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Course Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="CourseType"
                      label="Select Degree"
                      className="form-select-degree"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        None
                      </MenuItem>
                      {coursetype.map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                  <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Course</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      name="Course"
                      placeholder="Select Course"
                      className="form-select-course"
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="">
                        <option value="">None</option>
                      </MenuItem>
                      {course.map((item) => (
                        <MenuItem key={item.strid} value={item.coursecode}>
                          {item.coursecode + " - " + item.coursename}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <Button variant="contained" onClick={fetchstudents}>Filter</Button>
            </div>
            <br></br>
            <br></br>
            <Grid container spacing={1} style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '16px' }}>
              <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">Batch</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="Batch"
                    label="Select Batch"
                    className="form-select-batch"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="">
                      Select Teacher
                    </MenuItem>
                    {batch.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="Faculty"
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
            {/* <Button variant="contained" onClick={fetchCourses}>Fetch</Button> */}
            <br></br>
            <br></br>
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
                    {/* <TableCell align="center">Course Name </TableCell>  */}
                    {/* <TableCell align="center">Name</TableCell>  */}
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
                      {/* <TableCell align="center">{student.First_Name + " " + student.Middle_Name + " " + student.Last_Name}</TableCell> */}
                      {/* <TableCell align="center">{student.Batch}</TableCell> */}
                      {/* <TableCell align="center">{student['FA Name']}</TableCell> */}
                      {/* <TableCell align="center">
                        {student['FA Name'] ? student['FA Name'] : 'NULL'}
                      </TableCell> */}

                      {/* < button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
                      &nbsp;&nbsp;
                      <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button> */}
                    </TableRow>

                  ))}
                </TableBody>
              </Table>
            </TableContainer>
{/* 
            <table id="studentList">
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
            </table>

            <p>Selected items: {JSON.stringify(checkedValues.length)}</p>
            <br /> */}


          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Batchallotment
