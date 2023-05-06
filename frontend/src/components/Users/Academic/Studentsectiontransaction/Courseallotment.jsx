import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { InputLabel, FormControl, Select, MenuItem, Button, Box, Card, CardContent, CardHeader } from '@mui/material/';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Courseallotment() {

  const [Courseallotment, SetCourseAllotments] = useState({
    SessionID: "",
    Degree: "",
    Branch: "",
    Semester: "",
    SchemeID: "",
    CourseType: "",
    Course: "",
    TeacherDepartment: "",
    Teacher: "",
    AddTeacher: null
  });

  const navigate = useNavigate();

  const [session, setSession] = useState([]);
  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [semester, setsemester] = useState([]);
  const [scheme, setscheme] = useState([]);
  const [coursetype, setCoursetype] = useState(["Theory", "Practical", "Project"]);
  const [course, setCourse] = useState([]);
  const [teacherDepartment, setTeacherDepartment] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [addteacher, setaddTeacher] = useState([]);
  const [courseteacherlist, setCourseteacherlist] = useState([]);


  useEffect(() => {


    axios.get("http://localhost:3001/courseallotment")
      .then((response) => {
        setCourseteacherlist(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

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
        setTeacherDepartment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/master_scheme")
      .then((response) => {
        setscheme(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .post("http://localhost:3001/courselist", Courseallotment)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/staff_details/" + Courseallotment.TeacherDepartment)
      .then((response) => {
        setTeacher(response.data);
        setaddTeacher(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.get("http://localhost:3001/semester")
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios.post("http://localhost:3001/courselist1", Courseallotment)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, [Courseallotment]);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/courseallotment", Courseallotment);
      axios.get("http://localhost:3001/courseallotment")
        .then((response) => {
          setCourseteacherlist(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = async (e) => {
    SetCourseAllotments((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log(Courseallotment);
  return (
    <Box>
      <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#f5f5f5' }}>


        <CardContent>

          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Course Allotment"
          />
          <div>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
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

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Teacher from Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="TeacherDepartment"
                placeholder="Select FA"
                className="form-select-fa"
                onChange={handleChange}
                required
              >
                <MenuItem value="">
                  -- Select Department --
                </MenuItem>
                {teacherDepartment.map((item) => (
                  <MenuItem key={item.Branch_id} value={item.Branch_id}>
                    {item.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Teachers</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Teacher"
                placeholder="Select FA"
                className="form-select-fa"
                onChange={handleChange}
                required
              >
                <MenuItem value="">
                  -- Select Teacher --
                </MenuItem>
                {teacher.map((item) => (
                  <MenuItem key={item.staffID} value={item.First_Name + " " + item.Last_Name}>
                    {item.First_Name + " " + item.Last_Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Addition Teacher</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="AddTeacher"
                placeholder="Select FA"
                className="form-select-fa"
                onChange={handleChange}
                required
              >
                <MenuItem value="">
                  -- Select Addition Teacher --
                </MenuItem>
                {addteacher.map((item) => (
                  <MenuItem key={item.staffID} value={item.First_Name + " " + item.Last_Name}>
                    {item.First_Name + " " + item.Last_Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleClick}>submit</Button>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>

                  <TableRow>
                    <TableCell align="center">Course ID</TableCell>
                    <TableCell align="center">Course Name</TableCell>
                    <TableCell align="center">Teacher name</TableCell>
                    <TableCell align="center">Addition Teacher Name</TableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {courseteacherlist.map((courseteacherlist) => (
                    <TableRow
                      key={courseteacherlist.courseallot_ID}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                      <TableCell align="center">{courseteacherlist.courseallot_ID}</TableCell>
                      <TableCell align="center">{courseteacherlist.course_name}</TableCell>
                      <TableCell align="center">{courseteacherlist.teacher}</TableCell>
                      <TableCell align="center">{courseteacherlist.add_teacher}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* <Button variant="contained" onClick={fetchCourses}>Fetch</Button> */}
            <br></br>
            <br></br>
            <div className="facultyadv">
              <div>


                {/* <p>Selected itex`ms: {JSON.stringify(checkedValues)}</p> */}
                <br />

                {/* <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }}>
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
              </FormControl> */}

                {/* <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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
              </FormControl> */}


              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Courseallotment