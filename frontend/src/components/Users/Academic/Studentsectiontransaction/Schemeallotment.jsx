import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Schemeallotment() {
  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: "",
    Scheme: "",
  });

  const [studentlist, setstudentlist] = useState([]);

  //   useEffect(() => {

  //     fetchAllrollno();
  //     // eslint-disable-next-line
  //   }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    SetRolllists((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [degree, setdegree] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/degree")
      .then((response) => {
        setdegree(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [branch, setbranch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/branch")
      .then((response) => {
        setbranch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [semester, setsemester] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/semester")
      .then((response) => {
        setsemester(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [batch, setbatch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/batch")
      .then((response) => {
        setbatch(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [scheme, setscheme] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/master_scheme")
      .then((response) => {
        setscheme(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchStudents = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/rolllist", Rolllists);
      setstudentlist(res.data);
      // setBranch(res.data);
      // console.log(res.data+"!");
      console.log(res.data + "123");
    } catch (err) {
      console.log(err);
    }
  };

  const updateScheme = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/rolllist", Rolllists);
      setstudentlist(res.data);
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
    const newData = Rolllists.Scheme;
    console.log(newData);
    // if (checkedValues.length > 0) {
      axios.post('http://localhost:3001/assignscheme', {
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
  };

  console.log(studentlist);

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
          <option key={item.Branch_id} value={item.Branch_name}>
            {item.Branch_name}
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

      <button onClick={fetchStudents}>Show Students</button>

      <br></br>
      <br></br>
      <div className="">
        {/* {studentlist.map((student) => (
          <div key={student.roll_no} className="branch">
            <h2>{student.First_Name}</h2>
            <p>{branch.Branch_name}</p>
            <p>{branch.HOD}</p>
            <p>{branch.Students_enrolled}</p>
            <button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
            <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button>
          </div>
        ))} */}
        <div>
          <div>
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

            <p>Checked values: {JSON.stringify(checkedValues)}</p>
          </div>
          <br />
          <select
            name="Scheme"
            placeholder="Select Batch"
            className="form-select-batch"
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
          <button onClick={handleUpdateButtonClick}>Assign Scheme</button>
        </div>
      </div>
    </div>
  );
}

export default Schemeallotment;
