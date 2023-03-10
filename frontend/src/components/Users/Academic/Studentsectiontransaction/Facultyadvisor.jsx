import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { DataGrid } from '@mui/x-data-grid';
import { InputLabel, FormControl, Select, MenuItem, Button, Box } from '@mui/material/';

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
      .get("http://localhost:3001/degree")
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setbranch(response.data);

      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/semester")
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/batch")
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
      navigate("/");
    }
  };


  console.log(Rolllists);
  return (
    <Box>
      <div>
        <h1>Faculty Advisor</h1>
        <hr></hr>

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
              <MenuItem key={item.degree_id} value={item.degree_name}>
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
              <MenuItem key={item.Branch_id} value={item.Branch_id + "," + item.Branch_name}>
                {item.Branch_id}.{item.Branch_name}
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
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
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

        <Button variant="contained" onClick={fetchStudents}>Fetch</Button>
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
            {/* <div style={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={studentlist}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </div> */}
                
            <p>Selected items: {JSON.stringify(checkedValues)}</p>
            <br />

            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Faculty</InputLabel>
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

            <Button variant="contained" onClick={handleUpdateButtonClick}>Assign FA</Button>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Facultyadvisor;
