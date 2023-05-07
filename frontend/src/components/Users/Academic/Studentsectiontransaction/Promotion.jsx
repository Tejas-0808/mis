import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { InputLabel,Alert, FormControl,Grid, Select, MenuItem, Button, Box, CardContent, Card, CardHeader } from "@mui/material/";

function Promotion() {
  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: "",
  });

  const [error, setError] = useState("");

  const [alert, setAlert] = useState("");

  const [studentlist, setstudentlist] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/degree", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/branch", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setbranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/semester", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/batch", {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => {
        setbatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [degree, setdegree] = useState([]);
  const [branch, setbranch] = useState([]);
  const [semester, setsemester] = useState([]);
  const [batch, setbatch] = useState([]);
  const [branchid, setBranchid] = useState([]);

  const fetchStudents = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/rolllist", Rolllists, {
        headers: { authorization: localStorage.getItem("token") },
      });
      setstudentlist(res.data);
      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }
  };

  //   const updateScheme = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await axios.post("http://localhost:3001/rolllist", Rolllists);
  //       setstudentlist(res.data);
  //       // setBranch(res.data);
  //       // console.log(res.data+"!");
  //       console.log(res.data + "123");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

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
    const newData = Rolllists.Semester;
    console.log(newData);
    if (checkedValues.length > 0) {
      axios
        .post("http://localhost:3001/promotestudent", {
          checkedValues: checkedValues,
          newData: newData,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
        setAlert("Selected Students Promoted");
      navigate("/promotion");
    }
  };

  console.log(studentlist);

  console.log(Rolllists);
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& .MuiTextField-root": { m: 2, width: "25ch", padding: 2 },
    //     whiteSpace: "normal",
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#f5f5f5' }}>


    //     <CardContent>

    //       <CardHeader
    //         style={{ backgroundColor: "lightblue" }}
    //         title="Promotion"
    //       />
    <div style={{ height: '100vh', width: '100%' }}>

      <Box sx={{ width: '100%', height: '100%' }}>

        <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>

          <CardContent>
            <CardHeader
              style={{ backgroundColor: "lightblue" }}
              title="Promote Students"
            />

          <hr />
          <div>

          <Grid container spacing={1} >
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
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Branch"
                placeholder="Select Branch"
                className="form-select-branch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Branch --</MenuItem>
                {branch.map((item) => (
                  <MenuItem key={item.Branch_id} value={item.Branch_name}>
                    {item.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
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
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Batch</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Batch"
                placeholder="Select Batch"
                className="form-select-batch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Batch --</MenuItem>
                {batch.map((item) => (
                  <MenuItem key={item.batch_id} value={item.year}>
                    {item.year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
              </Grid>

             
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <Button variant="contained" onClick={fetchStudents}
                    sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>
                    Show Students
                  </Button>
                </Grid>

          

            

           

            {/* <select
          name="Degree"
          placeholder="Select Degree"
          className="form-select-degree"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Degree --</option>
          {degree.map((item) => (
            <option key={item.degree_id} value={item.degree_name}>
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
            <option key={item.Branch_id} value={item.Branch_name}>
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
            <option key={item.sem_id} value={item.sem}>
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
        </select> */}

            

            <br></br>
            <br></br>
            <div className="">
              <div>
                <div>
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

                  <p>Checked values: {JSON.stringify(checkedValues)}</p>
                </div>
                <br />

                <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label">
                    Semester
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    name="Semester"
                    placeholder="Select Batch"
                    className="form-select-batch"
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

                {/* <select
              name="Semester"
              placeholder="Select Batch"
              className="form-select-batch"
              onChange={handleChange}
              required
            >
              <option value="">-- Select Semester--</option>
              {semester.map((item) => (
                <option key={item.sem_id} value={item.sem}>
                  {item.sem}
                </option>
              ))}
            </select> */}

                <Button variant="contained" onClick={handleUpdateButtonClick}
                  sx={{ ml: 1, alignSelf: 'center', mt: 1, height: 55 }}>
                  Assign Semester
                </Button>

                <div>
            {alert ? <>
                <Alert severity='success'>{alert}</Alert>

            </>: <>
                {/* <Alert severity='error'>{error}</Alert> */}
            </>
            }
                    
            </div>
              </div>
            </div>
          </div>
        {/* </CardContent>

      </Card>
    </Box> */}
    </CardContent>
        </Card>
      </Box>

    </div>
  );
}

export default Promotion;
