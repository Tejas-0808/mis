import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function NewStudent() {

  const [personaldetails, setPersonalDetails] = useState({
    Reg_Id:"",
    First_Name:"", 
    Middle_Name:"", 
    Last_Name:"", 
    Email_id:"", 
    Phone_No:"", 
    Caste:"", 
    Religion:"", 
    Nationality:"", 
    Category:"", 
    Blood_group:"", 
    Gender:"", 
    D_O_B:"", 
    Birth_Place:"",
    Marital_Status:"", 
    // Seat_type:"", 
    Student_type:"", 
    Addhar_no:"", 
    Permanent_Add:"", 
    // Current_Add:"", 
    Physically_handicapped:"", 
    Branch:"", 
    // Photo:"", 
    // Signature:"", 
    // Fathers_Name:"", 
    Fathers_email:"", 
    Fathers_mobile:"", 
    // Fathers_occupation:"", 
    // Fathers_officeno:"",
    // Mothers_Name:"", 
    // Mothers_email:"", 
    // Mothers_mobile:"", 
    // Mothers_occupation:"",
    // Mothers_officeno:"", 
    Guardian_Name:"", 
    // Guardian_email:"", 
    // Guardian_mobile:"", 
    // Guardian_occupation:"",
    // Guardian_officeno:"",
    Date_of_admission:"", 
    Degree:"", 
    Payment_type:"", 
    // State_eligibility:"",
    // Year:"",
    Admission_batch:"",
    Semester:"",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
    <div className="form">
      NEW STUDENT ENTRY
      <hr></hr>
      <br></br>
      <input
        type="number"
        placeholder="reg_id"
        name="Reg_Id"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="First Name"
        name="First_Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Middle Name"
        name="Middle_Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="Last_Name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email id"
        name="Email_id"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Phone No"
        name="Phone_No"
        onChange={handleChange}
      />
      <input
        type="date"
        placeholder="dob"
        name="D_O_B"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="bloodgroup"
        name="Blood_group"
        onChange={handleChange}
      />
      <select
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
      </select>
      <select
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
      </select>
      <select
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
      </select>
      <h5>Martial Status</h5>
      <label>
        <input
          type="radio"
          name="Marital_Status"
          value="Married"
          checked={selectedMS === "Married"}
          onChange={handleCheckboxChange}
        />
        Married
      </label>
      <label>
        <input
          type="radio"
          name="Marital_Status"
          value="Unmarried"
          checked={selectedMS === "Unmarried"}
          onChange={handleCheckboxChange}
        />
        Unmarried
      </label>
      <h5>Gender</h5>
      <label>
        <input
          type="radio"
          name="Gender"
          value="Female"
          checked={selectedGender === "Female"}
          onChange={handleCheckboxChange1}
        />
        Female
      </label>
      <label>
        <input
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
        <input
          type="radio"
          name="Nationality"
          value="Indian"
          checked={selectedNationality === "Indian"}
          onChange={handleCheckboxChange2}
        />
        Indian
      </label>
      <label>
        <input
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
      <input
        type="text"
        placeholder="DTE application ID"
        name="DTE application ID"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Birth Place"
        name="Birth_Place"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last School/College"
        name="Last School/College"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Aadhar Number "
        name="Addhar_no"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="guardian name"
        name="Guardian_Name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Guardian Number"
        name="Guardian_Number"
        onChange={handleChange}
      />
      <h5>Status</h5>
      <label>
        <input
          type="radio"
          name="Student_type"
          value="Day Scholar"
          checked={selectedStatus === "Day Scholar"}
          onChange={handleCheckboxChange3}
        />
        Day Scholar
      </label>
      <label>
        <input
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
      <input
        type="number"
        placeholder="PIN"
        name="PIN"
        onChange={handleChange}
      />
      
      <input
        type="number"
        placeholder="Father's Phone No"
        name="Fathers_mobile"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Father's email"
        name="Fathers_email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Permanent Address"
        name="Permanent_Add"
        onChange={handleChange}
      />
      {/* <input type="date" onChange={handleChange} ref={dateInputRef} /> */}
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
      <input
        type="date"
        placeholder="Date of Admission"
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
  );
}

export default NewStudent;
