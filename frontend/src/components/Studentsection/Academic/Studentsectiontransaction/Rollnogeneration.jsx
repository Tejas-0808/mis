import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Grid, Card,Table, TableCell,TableBody,TableContainer,Paper,TableRow, TableHead, CardContent, CardHeader, TextField, nputLabel, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

function RollNoGeneration() {
  const [batch, setBatch] = useState([]);
  const [Degree, setDegree] = useState([]);
  const [branch, setBranch] = useState([]);
  const [sem, setSem] = useState([]);
  const [checkedValues, setCheckedValues] = useState([]);
  const [rollGen, setRollGen] = useState({
    admission_batch: "",
    department: "",
    degree: "",
    semester: "",
  });
  const [SData, SetSData] = useState([]);
  const [mapData, setMapData] = useState([])

  const [Data, setData] = useState([])


  /*
  try catch for posting the data to database
  remove and make a separate function outside the genarate function 
  */

  const fetchBatch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/batch", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setBatch(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setBranch(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSem = async () => {
    try {
      const res = await axios.get("http://localhost:3001/semester");
      setSem(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDegree = async () => {
    try {
      const res = await axios.get("http://localhost:3001/degree", {
        headers: { authorization: localStorage.getItem('token') }
      });
      setDegree(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();



  const generate = async (rollGen, mapData) => {

    const { admission_batch, department, degree, semester } = rollGen;


    var roll = 1;

    const objects = [];

    for (var i = 0; i < SData.length; i++) {

      var d = "";
      var t = "";
      var s = "";

      var branchCode = department.split('.')[0];
      if (department[0].length === 1) {
        branchCode = "0" + department[0];
      } else {
        branchCode = department[0];
      }

      if (degree === "B.Tech") {
        d = "BT";
        t = "F";
      } else if (degree === "M.Tech") {
        d = "MT";
        t = "F";
      } else if (degree === "MCA") {
        d = "MCA";
        t = "F";
      } else if (degree === "B.Tech PART TIME") {
        d = "BT";
        t = "P";
      } else if (degree === "M.Tech PART TIME") {
        d = "MT";
        t = "P";
      }

      if (semester === "I" || semester === "II") s = "F";
      else s = "S";

      
      const batchCode = admission_batch.toString().slice(-2);
      
      if (roll < 10) {
        roll = "00" + roll;
      } else {
        roll = "0" + roll;
      }
      const r = d + batchCode + s + branchCode + t + roll;

      var k = mapData[i];
      var value = r;

      const temp_obj = {
        name: k,
        gen_roll_no: value
      }

      objects.push(temp_obj);

      console.log(temp_obj);

      roll++;

    }

    setData(objects);
  };

  useEffect(() => {
    generate(rollGen, mapData)
  },[rollGen, mapData])


  console.log(Data);


  useEffect(() => {
    fetchBatch();
    fetchBranch();
    fetchDegree();
    fetchSem();
   
    console.log(SData);
    const names = SData.map(({ First_Name, Middle_Name, Last_Name }) => `${First_Name} ${Middle_Name} ${Last_Name}`);

    console.log(SData);
    // sort the names array by last name and then by first name
    names.sort(function (a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      var aLast = a.split(" ")[2];
      var bLast = b.split(" ")[2];
      var aFirst = a.split(" ")[0];
      var bFirst = b.split(" ")[0];
      if (aLast < bLast) { return -1; }
      if (aLast > bLast) { return 1; }
      if (aFirst < bFirst) { return -1; }
      if (aFirst > bFirst) { return 1; }
      // return 0;
    });

    setMapData(names);

    console.log(mapData);
  }, [SData, ]);

  const handleChange = (e) => {
    setRollGen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const HandleShow = async (rollGen) => {
    const { admission_batch, department, degree, semester } = rollGen;
    const dept = department.slice(2);
    
    try {
      const res = await axios.get("http://localhost:3001/rollgen?admission_batch=" + admission_batch + "&department=" + dept + "&degree=" + degree + "&semester=" + semester);
      const Dinfo = await res.data;
      SetSData(Dinfo);
    } catch (err) {
      console.log(err);
    }

    generate(rollGen, mapData);
  }


  const handleClick = async (e) => {
    e.preventDefault();

    const info = Data.map((stud) => ({
      stud_name: stud.name,
      stud_rollno: stud.gen_roll_no
    }));

    console.log(info);

    try {
      await axios.post("http://localhost:3001/rollgen", info);
      navigate("/rollnogeneration")
    } catch (err) {
      console.log(err);
    }
    console.log(info);
  };

  return (

    <div style={{ height: '100%', width: '100%' }}>

    <Box sx={{ width: '100%', height: '100%' }}>
      {/* <Box> */}
      <Card sx={{ m: 1, minWidth: 275, backgroundColor: '#F5F5F5' }}>


        <CardContent>

          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Roll Number Generation"
          />

          <div style={{ padding: '15px' }} >

          <Grid container spacing={1} >
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Admission Batch:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="admission_batch"
                placeholder="Select Admission Batch"
                className="form-select-batch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Batch --</MenuItem>
                {batch.map((batch) => (
                  <MenuItem value={batch.year}>
                    {batch.year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }} >
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Degree:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="degree"
                placeholder="Select Degree"
                className="form-select-degree"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Degree --</MenuItem>
                {Degree.map((degree) => (
                  <MenuItem key={degree.degree_name} value={degree.degree_name}>
                    {degree.degree_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Branch:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="department"
                placeholder="Select Branch"
                className="form-select-branch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Branch --</MenuItem>
                {branch.map((branch) => (
                  <MenuItem key={branch.Branch_id} value={`${branch.Branch_id}.${branch.Branch_name}`}>
                    {branch.Branch_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={3} sx={{ p: 0, m: 0 }}>
                <FormControl variant="outlined" sx={{ m: 1, minWidth: 250 }}>
              <InputLabel id="demo-simple-select-label">Semester:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="semester"
                placeholder="Select Semester"
                className="form-select-semester"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Semester --</MenuItem>
                {sem.map((sem) => {
                    if (sem.sem === 'I' || sem.sem === 'III') {
                      return (
                        <MenuItem key={sem.sem} value={sem.sem}>
                          {sem.sem}
                        </MenuItem>
                      );
                    }
                    return null; 
                  })}
              </Select>
            </FormControl>
                </Grid>
              </Grid>

            

            

            
              <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button variant='contained' className="Show" onClick={() => HandleShow(rollGen)}>Show Students</Button>

              </Box>
            

            
            <br></br>
            
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead style={{ backgroundColor: '#1976d2' }}>

                        <TableRow>
                          <TableCell align="center">Roll No</TableCell>
                          <TableCell align="center">Name</TableCell>
                        </TableRow>

                      </TableHead>
                      <TableBody>
                        {SData.map((student) => (
                          <TableRow
                            key={student.roll_no}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                        

                            <TableCell align="center">
                              {student.roll_no ? student.roll_no : 'NULL'}
                              </TableCell>
                            <TableCell align="center">{student.First_Name + " " + student.Middle_Name + " " + student.Last_Name}</TableCell>
                            
                          </TableRow>

                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>


            <div>
              <br></br>
              {/* <br></br>
              <div>
                <table id="courselist">
                  <tbody>
                    {SData.map((stud) => (
                      <tr key={stud.id}>
                        <td>
                          <div>
                            <span>{stud.First_Name + "-" + stud.Middle_Name + "-" + stud.Last_Name}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}

              <Box
                m={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Button variant='contained' className="submit" onClick={handleClick}>
                  Submit
                </Button>
              </Box>
            </div>
          </div>
        </CardContent>
      </Card>
    </Box >   
    </div>
  );
}

export default RollNoGeneration;
