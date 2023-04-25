import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardHeader, TextField, nputLabel, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

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
      const res = await axios.get("http://localhost:3001/batch");
      setBatch(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch" ,{
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
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDegree = async () => {
    try {
      const res = await axios.get("http://localhost:3001/degree");
      setDegree(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();


  // const set_sdata = (SData) => {
  //   const names = SData.map(({ First_Name, Middle_Name, Last_Name }) => `${First_Name} ${Middle_Name} ${Last_Name}`);

  //   console.log(SData);
  //   // sort the names array by last name and then by first name
  //   names.sort(function (a, b) {
  //     a = a.toLowerCase();
  //     b = b.toLowerCase();
  //     var aLast = a.split(" ")[2];
  //     var bLast = b.split(" ")[2];
  //     var aFirst = a.split(" ")[0];
  //     var bFirst = b.split(" ")[0];
  //     if (aLast < bLast) { return -1; }
  //     if (aLast > bLast) { return 1; }
  //     if (aFirst < bFirst) { return -1; }
  //     if (aFirst > bFirst) { return 1; }
  //     // return 0;
  //   });

  //   setMapData(names);
  //   // console.log(mapData);

  //   console.log(mapData);
  // }



  const generate = async (rollGen, mapData) => {

    const { admission_batch, department, degree, semester } = rollGen;


    var roll = 1;

    const objects = [];

    for (var i = 0; i < SData.length; i++) {

      var d = "";
      var t = "";
      var s = "";

      var branchCode = department[0];
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

      const batchCode = admission_batch.slice(-2);

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


  console.log(Data);
  // const send_data = async(e) =>  {

  // };



  useEffect(() => {
    fetchBatch();
    fetchBranch();
    fetchDegree();
    fetchSem();
    // set_sdata(SData);
    // HandleShow(rollGen);
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
  }, [SData]);

  const handleChange = (e) => {
    setRollGen((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // function handleCheckboxChange(event) {
  //   const { value, checked } = event.target;

  //   if (checked) {
  //     setCheckedValues([...checkedValues, value]);
  //   } else {
  //     setCheckedValues(checkedValues.filter((val) => val !== value));
  //   }
  // }


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


    // set_sdata(SData);

    generate(rollGen, mapData);
  }


  const handleClick = async (e) => {
    // e.preventDefault();

    // console.log(generate(rollGen, SData));

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
    <Card sx={{ m: 4, minWidth: 275 }}>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 2, width: "25ch", padding: 2 }, whiteSpace: 'normal' }}
        noValidate
        autoComplete="off"
      >
        <CardContent>
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Roll Number Generation"
          />
          <br></br>

          <div>
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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
                {batch.map((item) => (
                  <MenuItem key={item.year} value={item.year}>
                    {item.year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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
                {Degree.map((item) => (
                  <MenuItem key={item.degree_name} value={item.degree_name}>
                    {item.degree_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Branch:</InputLabel>
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
                  <MenuItem key={item.Branch_name} value={ item.Branch_name}>
                    {item.Branch_name}
                  </MenuItem>

                  // <MenuItem value="">-- Select Branch --</MenuItem>
                  // {branch.map((item) => (
                  //   <MenuItem key={item.Branch_name} value={[item.Branch_id, item.Branch_name]}>
                  //     {item.Branch_name}
                  //   </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Branch:</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                name="Branch"
                placeholder="Select Branch"
                className="form-select-branch"
                onChange={handleChange}
                required
              >
                <MenuItem value="">-- Select Branch --</MenuItem>
                {branch.map((branch) => (
                  <MenuItem value={branch.Branch_name}>
                    {branch.Branch_id}.{branch.Branch_name}
                  </MenuItem>
                ))}
                {/* {branch.map((item) => (
                  <MenuItem key={item.branch} value={item.branch}>
                    {item.branch}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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
                {sem.map((item) => (
                  <MenuItem key={item.sem} value={item.sem}>
                    {item.sem}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant='contained' className="Show" onClick={() => HandleShow(rollGen)}>Show</Button>

            <br></br>
            {/* <label>
              Admission Batch:
              <select
                name="admission_batch"
                placeholder="Select Admission Batch"
                className="form-select-batch"
                onChange={handleChange}
                required
              >
                <option value="">-- Select Batch --</option>
                {batch.map((batch) => (
                  <option value={batch.year}>{batch.year}</option>
                ))}
              </select>
            </label>

            <label>
              Degree:
              <select
                name="degree"
                placeholder="Select Degree"
                className="form-select-degree"
                onChange={handleChange}
                required
              >
                <option value="">-- Select Degree --</option>
                {Degree.map((degree) => (
                  <option value={degree.degree_name}>{degree.degree_name}</option>
                ))}
              </select>
            </label>*/

              // <label>
              //   Department:
              //   <select
              //     name="department"
              //     placeholder="Select Branch"
              //     className="form-select-branch"
              //     onChange={handleChange}
              //     required
              //   >
              //     <option value="">-- Select Branch --</option>
              //     {branch.map((branch) => (
              //       <option value={[branch.Branch_id, branch.Branch_name]}>
              //         {branch.Branch_id}.{branch.Branch_name}
              //       </option>
              //     ))}
              //   </select>
              // </label>
/*
            <label>
              Semester:
              <select
                name="semester"
                placeholder="Select Semester"
                className="form-select-semester"
                onChange={handleChange}
                required
              >
                <option value="">-- Select Semester --</option>
                {sem.map((sem) => (
                  <option value={sem.sem}>{sem.sem}</option>
                ))}
              </select>
            </label> */}

            <div>
              <br></br>
              <br></br>
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
              </div>

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
      </Box >
    </Card>
  );
}

export default RollNoGeneration;
