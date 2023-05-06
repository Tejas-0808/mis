import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
// import { setTimeout } from "timers/promises";
import { Link, useNavigate } from "react-router-dom";
import { Box, CardContent, Card, CardHeader, Select, Button } from '@mui/material/';

function Facultyadvisorconfirm() {

  const [batch, setBatch] = useState([]);
  const [Degree, setDegree] = useState([]);
  const [sem, setSem] = useState([]);
  const [session, setsession] = useState([]);
  const [faculty_id, setfaculty_id] = useState("");
  const [studentslist, setstudentlist] = useState([]);
  const [courses, setCourses] = useState([]);

  var [courseCode, setCourseCode] = useState([]);

  const [fetchstudents, setfetchstudents] = useState({
    Degree: "",
    session: "",
    semester: "",
    batch: ""
  })


  var uname = localStorage.getItem('username');
  console.log(uname);

  // const delay = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    axios
      .get("http://localhost:3001/batch")
      .then((response) => {
        setBatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/degree", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setDegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });


    axios
      .get(`http://localhost:3001/getfacid?uname=${uname}`)
      .then((response) => {
        setfaculty_id(response.data[0])
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/semester")
      .then((response) => {
        setSem(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/session", {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then((response) => {
        setsession(response.data);
      })
      .catch((error) => {
        console.error(error);
      });



    const courseCodes = [...new Set(studentslist.flatMap((std) => Object.values(std.courses).flat()))];
    // const courseCodes = studentslist.flatMap((std) => Object.values(std.courses).flat());


    if (courseCodes.length !== 0) {
      axios
        .post("http://localhost:3001/getcourse", { codes: courseCodes })
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [studentslist]);



  // studentslist.map((std) => {
  //     Object.entries(std.courses)
  //       .filter(([course, codes]) => codes.length > 0)
  //       .map(([course, codes]) => {
  //         setCourseCode((prev) => ({ ...prev, codes }));
  //       });
  // });

  // useEffect(() => {
  //     if (courseCode.length !== 0) {
  //       axios
  //         .post("http://localhost:3001/getcourse", courseCode)
  //         .then((response) => {
  //           setCourses(response.data);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     }
  // }, [courseCode]);



  console.log(faculty_id.Faculty_adv);

  const handleChange = (e) => {
    setfetchstudents((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }



  // const fetchCourse = async () => {
  //     try {
  //         const res = await axios.post("http://localhost:3001/getcourse", courseCode)
  //         setCourses(res.data);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  const fetchStudents = async () => {
    // e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/studentswithcourses", [fetchstudents, faculty_id])
      setstudentlist(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  console.log(fetchstudents);
  console.log(studentslist);


  console.log(courses);

  return (
    <Box>
      <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#f5f5f5' }}>


        <CardContent>

          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Faculty advisor Confirmation"
          />
          &nbsp;&nbsp;
          <div>
            <select
             variant="outlined"
              name="Degree"
              placeholder="Select degree"
              className="form-select-degree"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Degree --</option>
              {Degree.map((item) => (
                <option key={item.degree_id} value={[item.degree_id, item.degree_name]}>
                  {item.degree_id}. {item.degree_name}
                </option>
              ))}
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select
              name="batch"
              placeholder="Select batch"
              className="form-select-batch"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Batch --</option>
              {batch.map((item) => (
                <option key={item.batch_id} value={[item.batch_id, item.batch_name]}>
                  {item.batch_id}. {item.year}
                </option>
              ))}
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select
              name="session"
              placeholder="Select Session"
              className="form-select-session"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Session --</option>
              {session.map((item) => (
                <option key={item.session_id} value={[item.session_id, item.session_name]}>
                  {item.session_id}. {item.session_name}
                </option>
              ))}
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <select
              name="semester"
              placeholder="Select Semester"
              className="form-select-semester"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Semester --</option>
              {sem.map((item) => (
                <option key={item.sem_id} value={item.sem}>
                  {item.sem}
                </option>
              ))}
            </select>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={fetchStudents}>fetch</Button>

            &nbsp;&nbsp;&nbsp;&nbsp;
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;
              <table>
                <thead>
                  <tr>
                    <th>Roll No.</th>
                    <th>Courses</th>
                  </tr>
                </thead>
                <tbody>
                  {studentslist.map((student) => (
                    <tr>
                      <td>{student.roll_no}</td>
                      <td>
                        <ul>
                          {Object.entries(student.courses)
                            .filter(([course, codes]) => codes.length > 0)
                            .map(([course, codes]) => (
                              <li key={course}>
                                <strong>{course}:</strong>
                                {codes.map(code => {
                                  const courseDetails = courses.find(([courseObj]) => courseObj.coursecode === code)
                                  return (
                                    <div>
                                      {courseDetails ? `${code} - ${courseDetails[0].coursename}` : null}
                                    </div>
                                  )
                                })}
                              </li>
                            ))}
                        </ul>
                      </td>
                      <td>
                        <a href={`/editcourses/${student.roll_no}?sessionId=${fetchstudents.session.slice(0, 1)}&semester=${fetchstudents.semester}`}>Edit</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </CardContent>
      </Card>
    </Box>
  )
}


export default Facultyadvisorconfirm;