import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


function Schemeallotment() {

        const [rollno, setrollno] = useState([]);
      
        const navigate = useNavigate();
      
        console.log(rollno);
        const handleChange = (e) => {
          setrollno
          
          ((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
      
        return (
          <div>
            <select
              name="dropdown"
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
              name="dropdown"
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
              name="dropdown"
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
              name="dropdown"
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
          </div>
        )
}

export default Schemeallotment



