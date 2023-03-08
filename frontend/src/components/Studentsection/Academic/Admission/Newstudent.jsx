import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

function NewStudent() {
  const [personaldetails, setPersonalDetails] = useState({
    Reg_Id: "",
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Email_id: "",
    Phone_No: "",
    Caste: "",
    Religion: "",
    Nationality: "",
    Category: "",
    Blood_group: "",
    Gender: "",
    D_O_B: "",
    Birth_Place: "",
    Marital_Status: "",
    // Seat_type:"",
    Student_type: "",
    Addhar_no: "",
    Permanent_Add: "",
    // Current_Add:"",
    Physically_handicapped: "",
    Branch: "",
    // Photo:"",
    // Signature:"",
    // Fathers_Name:"",
    Fathers_email: "",
    Fathers_mobile: "",
    // Fathers_occupation:"",
    // Fathers_officeno:"",
    // Mothers_Name:"",
    // Mothers_email:"",
    // Mothers_mobile:"",
    // Mothers_occupation:"",
    // Mothers_officeno:"",
    Guardian_Name: "",
    // Guardian_email:"",
    // Guardian_mobile:"",
    // Guardian_occupation:"",
    // Guardian_officeno:"",
    Date_of_admission: "",
    Degree: "",
    Payment_type: "",
    // State_eligibility:"",
    // Year:"",
    Admission_batch: "",
    Semester: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setPersonalDetails((prev) => ({ ...prev, [e.target.name]: value }));
    // setPersonalDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(personaldetails);
  };

  const handleClickadd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/newstudent", personaldetails);
      navigate("/");
    } catch (err) {
      console.log(err);
      // setError(true)
    }
  };

  // console.log(branch);

  const [caste, setCaste] = useState([]);
  const [category, setCategory] = useState([]);
  const [religion, setReligion] = useState([]);
  const [city, setCity] = useState([]);
  const [state, setState] = useState([]);
  const [degree, setDegree] = useState([]);
  const [semester, setSem] = useState([]);
  const [payment, setPayment] = useState([]);
  const [branch, setBranch] = useState([]);
  const [batch, setBatch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/caste")
      .then((response) => {
        setCaste(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:3001/category")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/religion")
      .then((response) => {
        setReligion(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/city")
      .then((response) => {
        setCity(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/state")
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/degree")
      .then((response) => {
        setDegree(response.data);
      })
      .catch((error) => {
        console.error(error);
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
      .get("http://localhost:3001/branch")
      .then((response) => {
        setBranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/payment")
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://localhost:3001/batch")
      .then((response) => {
        setBatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [date, setDate] = useState("");
  // const dateInputRef = useRef(null);

  //   const handleChange = (e) => {
  // setDate(e.target.value);
  //   };

  const [selectedMS, setSelectedMS] = useState(null);
  const handleCheckboxChange = (event) => {
    setSelectedMS(event.target.value);
    handleChange(event);
  };
  const [selectedGender, setSelectedGender] = useState(null);
  const handleCheckboxChange1 = (event) => {
    setSelectedGender(event.target.value);
    handleChange(event);
  };
  const [selectedNationality, setSelectedNationality] = useState(null);
  const handleCheckboxChange2 = (event) => {
    setSelectedNationality(event.target.value);
    handleChange(event);
  };
  const [selectedStatus, setSelectedStatus] = useState(null);
  const handleCheckboxChange3 = (event) => {
    setSelectedStatus(event.target.value);
    handleChange(event);
  };
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" },}}
      noValidate
      autoComplete="off"
    >
      <div className="form">
        <h1>NEW STUDENT ENTRY</h1>
        <hr></hr>
        
        <TextField
          required
          type="number"
          variant="outlined"
          label="Registration ID"
          name="Reg_Id"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          name="First_Name"
          label="First Name"
          onChange={handleChange}
        />
        {/* <TextField
        type="text"
        placeholder="First Name"
        name="First_Name"
        onChange={handleChange}
      /> */}
        <TextField
          required
          type="text"
          variant="outlined"
          label="Middle Name"
          name="Middle_Name"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          label="Last Name"
          variant="outlined"
          name="Last_Name"
          onChange={handleChange}
        />
        <TextField
          required
          type="email"
          variant="outlined"
          label="Email ID"
          name="Email_id"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          variant="outlined"
          label="Phone Number"
          name="Phone_No"
          onChange={handleChange}
        />
        <TextField
          required
          variant="outlined"
          type="date"
          // label="Date of Birth"
          // placeholder="Date of Birth"
          name="D_O_B"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          variant="outlined"
          label="Blood Group"
          name="Blood_group"
          onChange={handleChange}
        />
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Caste</InputLabel>
          <Select
            required
            name="Caste"
            className="form-select-caste"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Caste"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Select Caste --</em>
            </MenuItem>
            {caste.map((item) => (
              <MenuItem key={item.caste_id} value={item.caste_name}>
                {item.caste_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <select
        name="Caste"
        placeholder="Select caste"
        className="form-select-caste"
        onChange={handleChange}
        required
      >
        <MenuItem value="">-- Select caste --</MenuItem>
        {caste.map((item) => (
          <MenuItem key={item.caste_id} value={item.caste_name}>
            {item.caste_name}
          </MenuItem>
        ))}
      </select> */}
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            required
            name="Category"
            className="form-select-category"
            labelId="demo-simple-select-helper-label"
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Select Category --</em>
            </MenuItem>
            {category.map((item) => (
              <MenuItem key={item.category_id} value={item.category_name}>
                {item.category_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <select
        name="Category"
        placeholder="Select Category"
        className="form-select-category"
        onChange={handleChange}
        required
      >
        <MenuItem value="">-- Select category --</MenuItem>
        {category.map((item) => (
          <MenuItem key={item.category_id} value={item.category_name}>
            {item.category_name}
          </MenuItem>
        ))}
      </select> */}
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
          <Select
            required
            name="Religion"
            className="form-select-religion"
            labelId="demo-simple-select-helper-label"
            label="Religion"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Select Religion --</em>
            </MenuItem>
            {religion.map((item) => (
              <MenuItem key={item.religion_id} value={item.Religion_name}>
                {item.Religion_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <select
          name="Religion"
          placeholder="Select Religion"
          className="form-select-religion"
          onChange={handleChange}
          required
        >
          <MenuItem value="">-- Select Religion --</MenuItem>
          {religion.map((item) => (
            <MenuItem key={item.religion_id} value={item.Religion_name}>
              {item.Religion_name}
            </MenuItem>
          ))}
        </select> */}
        {/* <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Martial Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel name="Marital_Status" onChange={handleCheckboxChange} checked={selectedMS === "Married"} control={<Radio />} label="Married" />
        <FormControlLabel name="Marital_Status" onChange={handleCheckboxChange} checked={selectedMS === "Unmarried"} control={<Radio />} label="Unmarried"  />
       
      </RadioGroup>
    </FormControl> */}

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Martial Status
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Marital_Status"
            // value={value}
            onChange={handleCheckboxChange1}
          >
            <FormControlLabel
              value="Married" control={<Radio />} label="Married"
            />
            <FormControlLabel value="Unmarried" control={<Radio />} label="Unmarried" />
          </RadioGroup>
        </FormControl>

        {/* <h5>Martial Status</h5>
        <label>
          <TextField
            type="radio"
            name="Marital_Status"
            value="Married"
            checked={selectedMS === "Married"}
            onChange={handleCheckboxChange}
          />
          Married
        </label>
        <label>
          <TextField
            type="radio"
            name="Marital_Status"
            value="Unmarried"
            checked={selectedMS === "Unmarried"}
            onChange={handleCheckboxChange}
          />
          Unmarried
        </label> */}
        {/* <h5>Gender</h5>
        <label>
          <TextField
            type="radio"
            name="Gender"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={handleCheckboxChange1}
          />
          Female
        </label>
        <label>
          <TextField
            type="radio"
            name="Gender"
            value="Male"
            checked={selectedGender === "Male"}
            onChange={handleCheckboxChange1}
          />
          Male
        </label> */}

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Gender"
            // value={value}
            onChange={handleCheckboxChange1}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Nationality"
            // value={value}
            onChange={handleCheckboxChange2}
          >
            <FormControlLabel value="Indian" control={<Radio />} label="Indian" />
            <FormControlLabel value="Foreigner" control={<Radio />} label="Foreigner" />
          </RadioGroup>
        </FormControl>

        {/* <h5>Nationality</h5>
        <label>
          <TextField
            type="radio"
            name="Nationality"
            value="Indian"
            checked={selectedNationality === "Indian"}
            onChange={handleCheckboxChange2}
          />
          Indian
        </label>
        <label>
          <TextField
            type="radio"
            name="Nationality"
            value="Foreigner"
            checked={selectedNationality === "Foreigner"}
            onChange={handleCheckboxChange2}
          />
          Foreigner
        </label> */}

        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Physically Handicapped</InputLabel>
          <Select
            required
            name="Physically_handicapped"
            className="form-physically-handicapped"
            labelId="demo-simple-select-helper-label"
            label="Physically Handicapped"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Physically Handicapped --</em>
            </MenuItem>
            <MenuItem value="1">
              Yes
            </MenuItem>
            <MenuItem value="0">
              No
            </MenuItem>
          </Select>
        </FormControl>

        {/* <select
          name="Physically_handicapped"
          placeholder="Physically Handicapped"
          className="form-physically-handicapped"
          onChange={handleChange}
          required
        >
          <option value="">-- Physically Handicapped --</option>
          <option value="1"> YES </option>
          <option value="0"> NO </option>
        </select> */}
        <TextField
          required
          type="text"
          label="DTE application ID"
          name="DTE application ID"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          label="Birth Place"
          name="Birth_Place"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          label="Last School/College"
          name="Last School/College"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          label="Aadhar Number "
          name="Addhar_no"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          variant="outlined"
          label="Guardian Name"
          name="Guardian_Name"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          label="Guardian Number"
          name="Guardian_Number"
          onChange={handleChange}
        />
        {/* <h5>Status</h5>
        <label>
          <TextField
            type="radio"
            name="Student_type"
            value="Day Scholar"
            checked={selectedStatus === "Day Scholar"}
            onChange={handleCheckboxChange3}
          />
          Day Scholar
        </label>
        <label>
          <TextField
            type="radio"
            name="Student_type"
            value="Hosteller"
            checked={selectedStatus === "Hosteller"}
            onChange={handleCheckboxChange3}
          />
          Hosteller
        </label> */}

        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="Student_type"
            // value={value}
            onChange={handleCheckboxChange3}
          >
            <FormControlLabel value="Day Scholar" control={<Radio />} label="Day Scholar" />
            <FormControlLabel value="Foreigner" control={<Radio />} label="Foreigner" />
          </RadioGroup>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Select City</InputLabel>
          <Select
            required
            name="City"
            className="form-city"
            labelId="demo-simple-select-helper-label"
            label="Select City"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Select City --</em>
            </MenuItem>
            {city.map((item) => (
              <MenuItem key={item.city_id} value={item.city_name}>
                {item.city_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">Select State</InputLabel>
          <Select
            required
            name="State"
            className="form-city"
            labelId="demo-simple-select-helper-label"
            label="Select State"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>-- Select State --</em>
            </MenuItem>
            {state.map((item) => (
              <MenuItem key={item.state_id} value={item.state_name}>
                {item.state_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <select
          name="City"
          placeholder="Select City"
          className="form-select-city"
          onChange={handleChange}
          required
        >
          <MenuItem value="">-- Select city --</MenuItem>
          {city.map((item) => (
            <MenuItem key={item.city_id} value={item.city_name}>
              {item.city_name}
            </MenuItem>
          ))}
        </select> */}
        {/* <select
          name="State"
          placeholder="Select State"
          className="form-select-state"
          onChange={handleChange}
          required
        >
          <MenuItem value="">-- Select State --</MenuItem>
          {state.map((item) => (
            <MenuItem key={item.state_id} value={item.state_name}>
              {item.state_name}
            </MenuItem>
          ))}
        </select> */}
        <TextField
          required
          type="number"
          label="PIN"
          name="PIN"
          onChange={handleChange}
        />
        <TextField
          required
          type="number"
          label="Father's Phone No"
          name="Fathers_mobile"
          onChange={handleChange}
        />
        <TextField
          required
          type="email"
          label="Father's email"
          name="Fathers_email"
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          label="Permanent Address"
          name="Permanent_Add"
          onChange={handleChange}
        />
        {/* <TextField type="date" onChange={handleChange} ref={dateTextFieldRef} /> */}

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Degree</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Degree"
            placeholder="Select Degree"
            className="form-select-Degree"
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

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Semester</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Semester"
            placeholder="Select Semester"
            className="form-select-Semester"
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

        <TextField
          required
          type="date"
          name="Date_of_admission"
          onChange={handleChange}
        />

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Branch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Branch"
            placeholder="Select Program"
            className="form-select-Program"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select Program --</MenuItem>
            {branch.map((item) => (
              <MenuItem key={item.Branch_id} value={item.Branch_name}>
                {item.Branch_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Payment-Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Payment_type"
            placeholder="Select Payment Type"
            className="form-select-PT"
            onChange={handleChange}
            required
          >
            <MenuItem value="">-- Select Payment Type --</MenuItem>
            {payment.map((item) => (
              <MenuItem key={item.payment_id} value={item.payment_type}>
                {item.payment_type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Batch</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="Admission_batch"
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

        <Button variant="contained" onClick={handleClickadd}>Add</Button>
      </div>
    </Box>
  );
}

export default NewStudent;
