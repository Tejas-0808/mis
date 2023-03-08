import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
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
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form">
        NEW STUDENT ENTRY
        <hr></hr>
        <br></br>
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
        <option value="">-- Select caste --</option>
        {caste.map((item) => (
          <option key={item.caste_id} value={item.caste_name}>
            {item.caste_name}
          </option>
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
        <option value="">-- Select category --</option>
        {category.map((item) => (
          <option key={item.category_id} value={item.category_name}>
            {item.category_name}
          </option>
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
          <option value="">-- Select Religion --</option>
          {religion.map((item) => (
            <option key={item.religion_id} value={item.Religion_name}>
              {item.Religion_name}
            </option>
          ))}
        </select> */}
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Martial Status</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel name="Marital_Status" onChange={handleCheckboxChange} checked={selectedMS === "Married"} control={<Radio />} label="Married" />
        <FormControlLabel name="Marital_Status" onChange={handleCheckboxChange} checked={selectedMS === "Unmarried"} control={<Radio />} label="Unmarried"  />
       
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
        <h5>Gender</h5>
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
        </label>
        <h5>Nationality</h5>
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
        </label>
        <select
          name="Physically_handicapped"
          placeholder="Physically Handicapped"
          className="form-physically-handicapped"
          onChange={handleChange}
          required
        >
          <option value="">-- Physically Handicapped --</option>
          <option value="1"> YES </option>
          <option value="0"> NO </option>
        </select>
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
        <h5>Status</h5>
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
        </label>
        <select
          name="City"
          placeholder="Select City"
          className="form-select-city"
          onChange={handleChange}
          required
        >
          <option value="">-- Select city --</option>
          {city.map((item) => (
            <option key={item.city_id} value={item.city_name}>
              {item.city_name}
            </option>
          ))}
        </select>
        <select
          name="State"
          placeholder="Select State"
          className="form-select-state"
          onChange={handleChange}
          required
        >
          <option value="">-- Select State --</option>
          {state.map((item) => (
            <option key={item.state_id} value={item.state_name}>
              {item.state_name}
            </option>
          ))}
        </select>
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
        <select
          name="Degree"
          placeholder="Select Degree"
          className="form-select-Degree"
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
          name="Semester"
          placeholder="Select Semester"
          className="form-select-Semester"
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
        <label>
          Year
          {/* <select value={dateSelect.yearValue} onChange={dateSelect.onYearChange}>
          {dateSelect.yearOptions.map((yearOption) => (
            <option key={yearOption.value} value={yearOption.value}>
              {yearOption.label}
            </option>
          ))}
        </select> */}
        </label>
        <select
          name="Branch"
          placeholder="Select Program"
          className="form-select-Program"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Program --</option>
          {branch.map((item) => (
            <option key={item.Branch_id} value={item.Branch_name}>
              {item.Branch_name}
            </option>
          ))}
        </select>
        <TextField
          required
          type="date"
          name="Date_of_admission"
          onChange={handleChange}
        />
        <select
          name="Payment_type"
          placeholder="Select Payment Type"
          className="form-select-PT"
          onChange={handleChange}
          required
        >
          <option value="">-- Select Payment Type --</option>
          {payment.map((item) => (
            <option key={item.payment_id} value={item.payment_type}>
              {item.payment_type}
            </option>
          ))}
        </select>
        <select
          name="Admission_batch"
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
        </select>
        <button onClick={handleClickadd}>Add</button>
      </div>
    </Box>
  );
}

export default NewStudent;
