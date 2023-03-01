import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Facultyadvisor() {
  const [Rolllists, SetRolllists] = useState({
    Degree: "",
    Branch: "",
    Semester: "",
    Batch: "",
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

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange1 = (event) => {
    setCheckedItems({...checkedItems, [event.target.name]: event.target.checked});
  }
  console.log(studentlist);

  //   console.log(Rolllists);
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
      <button onClick={fetchStudents}>fetch</button>
      <br></br>
      <br></br>
      <div className="branch">
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
          <table id="studentList">
            {studentlist.map((student) => (
              <tr>
                <td>
                  <input
                    id="chkMango"
                    name={student.First_Name}
                    type="checkbox"
                    value={student.roll_no}
                    // checked={checkedItems.student.First_Name}
                    onChange={handleChange1}
                  />
                  <label for="chkMango">{student.First_Name}</label>
                </td>
              </tr>
            ))}
          </table>
          <p>Selected items: {JSON.stringify(checkedItems)}</p>
          <br />
          <input type="button" value="Get" onclick="GetSelected()" />
        </div>
      </div>
    </div>
  );
}

export default Facultyadvisor;
