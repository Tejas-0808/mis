import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { InputLabel, FormControl, Select, MenuItem, Button, Box, Card, CardContent,Grid, CardHeader } from '@mui/material/';

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

    // axios
    //   .get("http://localhost:3001/batch")
    //   .then((response) => {
    //     setbatch(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    //course ka fetch banana haI

    axios
      .post("http://localhost:3001/courselist",Batchlist)
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

      axios.post("http://localhost:3001/courselist1",Batchlist)
            .then((response) => {
              setCourse(response.data);
            })
            .catch((error) => {
              console.error(error);
            });

  }, [Batchlist]);

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

  const fetchStudents = async (e) => {
    setCheckedValues([]);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/courselist", Batchlist);
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
    const newData = Batchlist.Faculty;
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
      navigate("/userdashboard");
    }
  };


  console.log(Batchlist);
  return (
    <div style={{ height: '100%', width: '100%'}}>
      
    <Box sx={{ width: '100%', height: '100%'}}>
    {/* <Box> */}
      <Card sx={{ m: 1, minWidth: 275, backgroundColor:'#F5F5F5' }}>


        <CardContent>

          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Batch Allotment"
          />


<div style={{ padding: '15px'}}  >
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
            <FormControl fullWidth variant="outlined" sx={{ m: 1, minWidth: 200 }}>
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
                  <MenuItem key={item.strid} value={item.coursename}>
                    {item.coursename}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
          </Grid>

          </div>
          <div style={{ display: 'flex', justifyContent: 'center' , marginTop:'15px' }}>
              <Button variant="contained" onClick={fetchCourses}>Filter</Button>
            </div>
          <div>
            {/* <Button variant="contained" onClick={fetchCourses}>Fetch</Button> */}
            <br></br>
            <br></br>
            <div className="facultyadv">
              <div>
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
                            {/* <input type="text" value={item.value} onChange={(event) => handleInputChange(event, item.id)} /> */}
                          </div>
                        </td>
                      </tr>
                    </table>
                  ))}
                </table>

                <p>Selected items: {JSON.stringify(checkedValues)}</p>
                <br />

                <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
                  <InputLabel id="demo-simple-select-label">Batch</InputLabel>
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
                    {batch.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

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



                <Button variant="contained" onClick={handleUpdateButtonClick}>Assign FA</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
}

export default Batchallotment
