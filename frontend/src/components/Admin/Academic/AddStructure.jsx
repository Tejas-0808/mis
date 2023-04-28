import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button,
  Box,
  TextField,
} from "@mui/material/";
import { CardContent, Card, CardHeader} from "@mui/material/";
function AddStructure() {
  const [Scheme, setScheme] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Semester, setSem] = useState([]);
  const [Branch, setBranch] = useState([]);
  const [Bos, setBos] = useState([]);
  const [result, setResult] = useState(0);
  const [Structure, setStructure] = useState({
    mastersch_id: "",
    course_category: "",
    semester: "",
    branch_id: "",
    board_of_study: "",
    coursecode: "",
    coursename: "",
    lecture: "",
    tut: "",
    pract: "",
    ise1: "",
    ise2: "",
    ise3: "",
    PR: "",
    TW: "",
    ese: "",
    total_marks: "",
    total_credits: "",
  });

  const fetchScheme = async () => {
    try {
      const res = await axios.get("http://localhost:3001/master_scheme",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setScheme(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:3001/course_category",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setCategory(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSem = async () => {
    try {
      const res = await axios.get("http://localhost:3001/semester",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setSem(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBranch = async () => {
    try {
      const res = await axios.get("http://localhost:3001/branch",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setBranch(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBos = async () => {
    try {
      const res = await axios.get("http://localhost:3001/b_o_s",{
        headers: { authorization: localStorage.getItem('token') }
      });
      setBos(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchScheme();
    fetchCategory();
    fetchBranch();
    fetchBos();
    fetchSem();
  }, []);

  const handleChange = (e) => {
    setStructure((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setResult(parseInt(Structure.lecture) + parseInt(Structure.pract));
  };
  console.log(result);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/structure", Structure,{
        headers: { authorization: localStorage.getItem('token') }
      });
      navigate("/structure");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
       <Card sx={{ m: 1, minWidth: 275 }}>
     
        
     <CardContent>

       <CardHeader
         style={{ backgroundColor: "lightblue" }}
         title="ADD STRUCTURE"
       />
      <div className="form">
        {/* <h1>ADD Structure</h1> */}
        <br></br>
        <hr></hr>

        {/* <TextField
          required
          label="Structure ID"
          type="number"
          placeholder="Structure Id"
          name="strid"
          onChange={handleChange}
        /> */}

        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Scheme ID
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="mastersch_id"
            placeholder="Select Scheme"
            className="form-select-scheme"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select Scheme ID --</MenuItem>
            {Scheme.map((Scheme) => (
              <MenuItem value={Scheme.mastersch_id}>{Scheme.master_scheme}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="course_category"
            placeholder="Select Category"
            className="form-select-category"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select Course Category --</MenuItem>
            {Category.map((Category) => (
              <MenuItem value={Category.course_category_id}>{Category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
          <InputLabel id="demo-simple-select-helper-label">Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="semester"
            placeholder="Board of Study"
            className="form-select-case"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select Sem --</MenuItem>
            {Semester.map((Semester) => (
              <MenuItem value={Semester.sem}>{Semester.sem}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
          <InputLabel id="demo-simple-select-helper-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="branch_id"
            placeholder="Select Branch Id"
            className="form-select-BranchId"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select BranchId --</MenuItem>
            {Branch.map((Branch) => (
              <MenuItem value={Branch.Branch_id}>{Branch.Branch_name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: "25ch" }}>
          <InputLabel id="demo-simple-select-helper-label">BOS</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="board_of_study"
            placeholder="Select BOS"
            className="form-select-Bos"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select BOS --</MenuItem>
            {Bos.map((Bos) => (
              <MenuItem value={Bos.dept_id}>{Bos.department}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          required
          label="Course Code"
          name="coursecode"
          type="text"
          onChange={handleChange}
        />
        <TextField
          required
          label="Course Name"
          type="text"
          name="coursename"
          onChange={handleChange}
        />

        <br></br>
        <br></br>
        <TextField
          required
          type="number"
          label="Lecture"
          name="lecture"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          label="Tutorial"
          name="tut"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="Practical"
          name="pract"
          onChange={handleChange}
        />

        {/* <h3>
          <input
            type="number"
            placeholder="Total"
            name="total"
            value={result}
          />
        </h3> */}
        <TextField
          type="number"
          value={result}
          required
          placeholder="Total"
          name="total"
          onChange={handleChange}
        />

        <TextField
          type="number"
          required
          label="In Sem 1"
          name="ise1"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="In Sem 2"
          name="ise2"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="In Sem 3"
          name="ise3"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="PR"
          name="PR"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="TW"
          name="TW"
          onChange={handleChange}
        />
        <TextField
          type="number"
          required
          label="End Sem"
          name="ese"
          onChange={handleChange}
        />

        <TextField type="number" required label="Total Marks" name="total_marks" onChange={handleChange} />
        <TextField
          type="number"
          required
          label="Total Credits"
          name="total_credits"
          onChange={handleChange}
        />

        <br />
        {/* <Button variant="contained" onClick={handleClick} sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }}>
          Add
        </Button> */}
        <Button variant="contained"
    onClick={handleClick}
    sx={{ ml: 1, alignSelf: 'center',mt: 1,height: 55 }} >Add</Button>
  
      </div>
      </CardContent>
  </Card>
    </Box>
  );
}

export default AddStructure;
