import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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


  // useEffect(() => {
  // }, []);

  // // console.log(branch);

  // useEffect(() => {
  // }, []);


  // useEffect(() => {
  // }, []);




  // useEffect(() => {
  // }, []);

  const handleChange = async (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // console.log(faculty_advisor);


  console.log(Rolllists);

  const fetchStudents = async (e) => {
    setCheckedValues([]);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/facultyrolllists", Rolllists);
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

  // console.log(studentlist);

  console.log(Rolllists);
  return (
    <div>
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
        name="Branch"
        placeholder="Select Branch"
        className="form-select-branch"
        onChange={handleChange}
        required
      >
        <option value="">-- Select Branch --</option>
        {branch.map((item) => (
          <option key={item.Branch_id} value={[item.Branch_id, item.Branch_name]}>
            {item.Branch_id}. {item.Branch_name}
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
      </select>
      <button onClick={fetchStudents}>fetch</button>
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
          <p>Selected items: {JSON.stringify(checkedValues)}</p>
          <br />
          <select
            name="Facultyadvisor"
            placeholder="Select FA"
            className="form-select-fa"
            onChange={handleChange}
            required
          >
            <option value="">-- Select FA --</option>
            {faculty_advisor.map((item) => (
              <option key={item.staffID} value={item.staffID}>
                {item.First_Name + " " + item.Last_Name}
              </option>
            ))}
          </select>
          <button onClick={handleUpdateButtonClick}>Assign FA</button>
        </div>
      </div>
    </div>
  );
}

export default Facultyadvisor;
