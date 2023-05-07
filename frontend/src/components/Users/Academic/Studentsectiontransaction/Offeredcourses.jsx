import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { InputLabel, Grid, FormControl, Select, MenuItem, Button, Box, Card, CardContent, CardHeader } from '@mui/material/';

function OfferedCourses() {
  const [Courseslists, SetCourselists] = useState({
    SessionID: "",
    Term: "",
    Degree: "",
    BranchID: "",
    Semester: "",
    SchemeID: "",
  });

  //   const [studentlist, setstudentlist] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetCourselists((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [session, setSession] = useState([]);
  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [semester, setsemester] = useState([]);
  // const [batch, setbatch] = useState([]);
  const [scheme, setscheme] = useState([]);
  const [courselt, setCourselt] = useState([]);
  const [initiallyCheckedValues, setInitiallyCheckedValues] = useState([]);


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
    // .get("http://localhost:3001/batch")
    // .then((response) => {
    //   setbatch(response.data);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
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
  }, []);



  const fetchCourses = async (e) => {
    // setCheckedValues([]);
    e.preventDefault();
    try {

      const res = await axios.post(
        "http://localhost:3001/courselist",
        Courseslists, {
        headers: { authorization: localStorage.getItem('token') }
      }
      );
      setCourselt(res.data);
      const couselistss = res.data;
      const initiallyCheckedValues = couselistss.filter((course) => course.finally_offered === 1).map((course) => course.coursecode);
      setCheckedValues(initiallyCheckedValues);
      setInitiallyCheckedValues(initiallyCheckedValues);
      // console.log(initiallyCheckedValues + "123");

      console.log(res.data)

    } catch (err) {
      console.log(err);
    }

  };

  const updateScheme = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(
        "http://localhost:3001/courselist",
        Courseslists
      );
      setCourselt(res.data);

      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }
  };

  // const handleChange1 = (event) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [event.target.name]: event.target.checked,

  //   });
  // };

  const [checkedValues, setCheckedValues] = useState([]);



  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedValues((prevCheckedValues) => [...prevCheckedValues, value]);
    } else {
      setCheckedValues((prevCheckedValues) =>
        prevCheckedValues.filter((val) => val !== value)
      );
      setInitiallyCheckedValues((prevInitiallyCheckedValues) =>
        prevInitiallyCheckedValues.filter((val) => val !== value)
      );
    }
  }


  const handleUpdateButtonClick = () => {
    const newData = true;
    console.log(newData);
    // if (checkedValues.length > 0) {
    axios.post('http://localhost:3001/offercourses', {
      checkedValues: checkedValues,
      newData: newData,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // navigate("/");
    // }
    // if (checkedValues.length > 0) {
    // axios
    //   .post("http://localhost:3001/offercourses", {
    //     checkedValues: checkedValues
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // navigate("/");
    // }
  };

  //   console.log(studentlist);

  console.log(Courseslists);
  return (

    // <Box component="form"
    //   sx={{ "& .MuiTextField-root": { m: 2, width: "25ch", padding: 2 }, whiteSpace: 'normal' }}
    //   noValidate
    //   autoComplete="off">
    //   <Card sx={{ m: 4, minWidth: 275, backgroundColor: '#f5f5f5' }}>
    //     <CardContent>
    //       <CardHeader
    //         style={{ backgroundColor: "lightblue" }}
    //         title="Courses Offered"
    //       />
    //       <br></br>
    //       <div>
    <div style={{ height: '100vh', width: '100%' }}>

    <Box sx={{ width: '100%', height: '100%' }}>

      <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>

        <CardContent>
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Offer Courses"
          />

          <div style={{ padding: '15px' }}  >
                {/* <Grid container spacing={2} sx={{ width: '100%' }}> */}
              <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
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
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Offered to Term</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Term"
                placeholder="select Term"
                className="form-select-term"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Offered to term --</MenuItem>
                {semester.map((item) => (
                  <MenuItem key={item.sem_id} value={item.sem}>
                    {item.sem}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Degree</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Degree"
                placeholder="Select Degree"
                className="form-select-degree"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Degree --</MenuItem>
                {degree.map((item) => (
                  <MenuItem key={item.degree_id} value={item.degree_name}>
                    {item.degree_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="BranchID"
                placeholder="Select Branch"
                className="form-select-branch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Branch --</MenuItem>
                {branch.map((item) => (
                  <MenuItem key={item.Branch_id} value={item.Branch_id}>
                    {item.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
              </Grid>

              <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
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
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Semester</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Semester"
                placeholder="Select Semester"
                className="form-select-semester"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Semester --</MenuItem>
                {semester.map((item) => (
                  <MenuItem key={item.sem_id} value={item.sem}>
                    {item.sem}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <Button variant="contained" onClick={fetchCourses}>Show Courses</Button>

                </Grid>
                
              </Grid>


            

            

           

            

            

           
            <br></br>
            <br></br>
            Offered Courses
            <div className="offercourses">
              <div>
                <table id="studentList">
                  {courselt.map((course) => (
                    <table>
                      <tr>
                        <td>
                          <div key={course.coursecode}>
                            <input
                              type="checkbox"
                              value={course.coursecode}
                              checked={initiallyCheckedValues.includes(course.coursecode) || checkedValues.includes(course.coursecode)}
                              // checked={checkedValues.includes(course.coursecode)}
                              onChange={handleCheckboxChange}
                            />
                            <span>{course.coursecode}</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  ))}
                </table>
                <p>Selected items: {JSON.stringify(checkedValues)}</p>
                <br />
                <Box
                  m={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button variant="contained" onClick={handleUpdateButtonClick}>Offer Courses </Button>
                </Box>

              </div>
            </div>
          </div>
        </CardContent>
      </Card >
    </Box >
    </div>
  );
}

export default OfferedCourses;


