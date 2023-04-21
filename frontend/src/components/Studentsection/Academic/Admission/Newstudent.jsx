import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, InputLabel, FormControl } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import {Card, CardContent, CardHeader} from "@mui/material";

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
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //     //   e.target.type === "checkbox" ? e.target.checked : e.target.value;
  //     // setPersonalDetails((prev) => ({ ...prev, [e.target.name]: value }));
  //     setPersonalDetails((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //     if (name === "Phone_No") {
  //       setPhoneError(
  //         /^\d{10}$/.test(value)
  //           ? ""
  //           : "Invalid Phone Number"
  //       );
  //     }
  //   console.log(personaldetails);
  // };
  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setPersonalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  
    if (name === "Phone_No" || name === "Fathers_mobile" || name === "Guardian_Number") {
      setPhoneError(
        /^\d{10}$/.test(value)
          ? ""
          : "Invalid Phone Number"
      );
    }
  
    if (name === "Email_id" || name ==="Fathers_email ") {
      setEmailError(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email address"
      );
    }
  
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
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState('');



  useEffect(() => {
    fetch("http://localhost:3001/state")
      .then((response) => response.json())
      .then((data) => setStates(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch the list of cities for the selected state ID from the API
      fetch("http://localhost:3001/city?state_id=${selectedState} ")
      .then(response => response.json())
      .then(data => setCities(data))
      .catch(error => console.error(error));
    }}, [selectedState]);
  
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };
    

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };
  
  return (
    <Card sx={{ minWidth: 275 }}>
      {/* <h1>Educational Detail</h1><hr /> */}
      <CardContent>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" }, whiteSpace: 'normal', border: 1, alignContent:'center', justifyContent:'center', display:'-ms-inline-grid' }}
          noValidate
          autoComplete="off"
        >
          <CardHeader
            style={{ backgroundColor: "lightblue" }}
            title="Academic->Admission->New Student"
          />
    <Box display="block"
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
       
        <h1 style={{ fontSize: "30px",marginRight: "1000px" }}>NEW STUDENT ENTRY</h1>
        <hr></hr>

        <TextField
          required
          type="number"
          id="outlined-basic"
          variant="outlined"
          label="Registration ID"
          name="Reg_Id"
          onChange={handleChange}
        />

        <TextField
          id="outlined-basic"
          required
          variant="outlined"
          name="First_Name"
          label="First Name"
          onChange={handleChange}
        />

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
          label="Email"
          name="Email_id"
          value={personaldetails.Email_id}
          onChange={handleChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />

        <TextField
          label="Phone No"
          name="Phone_No"
          value={personaldetails.Phone_No}
          onChange={handleChange}
          error={Boolean(phoneError)}
          helperText={phoneError}
        />
        <TextField
          label="Date of Birth"
          name="D_O_B"
          type="date"
          onChange={handleChange}
          sx={{ height: 45}}
          // defaultValue="2017-05-24"
          // className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          required
          type="text"
          variant="outlined"
          label="Blood Group"
          name="Blood_group"
          onChange={handleChange}
        />

        <FormControl sx={{ m: 1, minWidth: "25ch"}}>
          <InputLabel id="demo-simple-select-helper-label">Caste</InputLabel>
          <Select
            required
            name="Caste"
            className="form-select-caste"
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Caste"
            onChange={handleChange}
            sx={{ height: 45}}
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

        <FormControl sx={{ m: 1, minWidth: "25ch"}}>
          <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
          <Select
            required
            name="Category"
            className="form-select-category"
            labelId="demo-simple-select-helper-label"
            label="Category"
            onChange={handleChange}
            sx={{ height: 45}}
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

        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
          <Select
            required
            name="Religion"
            className="form-select-religion"
            labelId="demo-simple-select-helper-label"
            label="Religion"
            onChange={handleChange}
            sx={{ height: 45}}
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

        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Martial Status
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                value="Married"
                checked={selectedMS === "Married"}
                name="Marital_Status"
                onChange={handleCheckboxChange}
                
              />
            }
            label="Married"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Unmarried"
                checked={selectedMS === "Unmarried"}
                name="Marital_Status"
                onChange={handleCheckboxChange}
              />
            }
            label="Unmarried"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                value="Female"
                checked={selectedGender === "Female"}
                name="Gender"
                onChange={handleCheckboxChange1}
              />
            }
            label="Female"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Male"
                checked={selectedGender === "Male"}
                name="Gender"
                onChange={handleCheckboxChange1}
              />
            }
            label="Male"
          />
        </FormGroup>

        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Nationality
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                value="Indian"
                checked={selectedNationality === "Indian"}
                name="Nationality"
                onChange={handleCheckboxChange2}
              />
            }
            label="Indian"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Foreigner"
                checked={selectedGender === "Foreigner"}
                name="Nationality"
                onChange={handleCheckboxChange2}
              />
            }
            label="Foreigner"
          />
        </FormGroup>

        <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Physically Handicapped
          </InputLabel>
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
            <MenuItem value="1">Yes</MenuItem>
            <MenuItem value="0">No</MenuItem>
          </Select>
        </FormControl>

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
          label="Guardian Phone No"
          name="Guardian_Number"
          value={personaldetails.Guardian_Number}
          onChange={handleChange}
          error={Boolean(phoneError)}
          helperText={phoneError}
        />

        <FormGroup>
          <FormLabel id="demo-controlled-radio-buttons-group">Status</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                value="Day Scholar"
                checked={selectedStatus === "Day Scholar"}
                name="Student_type"
                onChange={handleCheckboxChange3}
              />
            }
            label="Day Scholar"
          />
          <FormControlLabel
            control={
              <Checkbox
                value="Hosteller"
                checked={selectedStatus === "Hosteller"}
                name="Student_type"
                onChange={handleCheckboxChange3}
              />
            }
            label="Hosteller"
          />
        </FormGroup>
        <div>
    <label htmlFor="state-select">Select a state:</label>
    <select id="state-select" value={selectedState} onChange={handleStateChange}>
      <option value="">--Select a state--</option>
      {states.map(state => (
        <option key={state.state_id} value={state.state_id}>{state.state_name}</option>
      ))}
    </select>

    {selectedState && (
      <>
        <br />
        <label htmlFor="city-select">Select a city:</label>
        <select id="city-select" value={selectedCity} onChange={handleCityChange}>
          <option value="">--Select a city--</option>
          {cities.map(city => (
            <option key={city.city_id} value={city.city_id}>{city.city_name}</option>
          ))}
        </select>
      </>
    )}
  </div>
  
        {/* <FormControl sx={{ m: 1, minWidth: 250 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Select City
          </InputLabel>
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
          <InputLabel id="demo-simple-select-helper-label">
            Select State
          </InputLabel>
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
        </FormControl> */}
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

        <TextField
          required
          type="number"
          label="PIN"
          name="PIN"
          onChange={handleChange}
        />
        <TextField
          label="Father's Phone No"
          name="Fathers_mobile"
          value={personaldetails.Fathers_mobile}
          onChange={handleChange}
          error={Boolean(phoneError)}
          helperText={phoneError}
        />
      
          <TextField
          label="Father's Email"
          name="Fathers_email"
          value={personaldetails.Fathers_email}
          onChange={handleChange}
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <TextField
          required
          type="text"
          label="Permanent Address"
          name="Permanent_Add"
          onChange={handleChange}
        />

        <FormControl variant="outlined" sx={{ m: 1, minWidth: 130 }}>
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
          name="Date_of_admission"
          label="Date of Admission"
          type="date"
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />

        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            required
            name="Date_of_admission"
            label="Date of Admission"
            // value={value}
            onChange={handleChange}
          />
        </LocalizationProvider> */}

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

        <Button variant="contained" onClick={handleClickadd}>
          Add
        </Button>
      </div>
    </Box>
    </Box>
      </CardContent>
    </Card>
 
  );
}

export default NewStudent;
