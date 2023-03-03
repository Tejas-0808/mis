import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function OfferedCourses() {
  const [Courseslists, SetCourselists] = useState({
    SessionID: "",
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
      .get("http://localhost:3001/session")
      .then((response) => {
        setSession(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
    // axios
    // .get("http://localhost:3001/batch")
    // .then((response) => {
    //   setbatch(response.data);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
    axios
      .get("http://localhost:3001/master_scheme")
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
        Courseslists
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
      setCheckedValues([...checkedValues, value]);
    } else {
      setCheckedValues(checkedValues.filter((val) => val !== value));
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
      navigate("/");
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

  //   console.log(Rolllists);
  return (
    <div>
      <select
        name="SessionID"
        placeholder="Select Session"
        className="form-select-session"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Session --</option>
        {session.map((item) => (
          <option key={item.session_id} value={item.session_id}>
            {item.session_name}
          </option>
        ))}
      </select>
      <select
        name="term"
        placeholder="Select Term"
        className="form-select-term"
        onChange={handleChange}
        required
      >
        <option value="">-- Offered to term --</option>
        {semester.map((item) => (
          <option key={item.sem_id} value={item.sem}>
            {item.sem}
          </option>
        ))}
      </select>
      <select
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
        name="BranchID"
        placeholder="Select Branch"
        className="form-select-branch"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Branch --</option>
        {branch.map((item) => (
          <option key={item.Branch_id} value={item.Branch_id}>
            {item.Branch_name}
          </option>
        ))}
      </select>
      <select
        name="SchemeID"
        placeholder="Select Scheme"
        className="form-select-scheme"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Scheme --</option>
        {scheme.map((item) => (
          <option key={item.mastersch_id} value={item.mastersch_id}>
            {item.master_scheme}
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

      <button onClick={fetchCourses}>Show Courses</button>

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

         
          <button onClick={handleUpdateButtonClick}>Offer Courses </button>
        </div>
      </div>
    </div>
  );
}

export default OfferedCourses;


