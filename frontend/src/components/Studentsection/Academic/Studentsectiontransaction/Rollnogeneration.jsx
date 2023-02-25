import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RollNoGeneration() {
  const [Degree, setDegree] = useState([]);

  const fetchAllDegree = async () => {
    try {
      const res = await axios.get("http://localhost:3001/degree");
      setDegree(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllDegree();
  }, []);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Roll Number Generation</h2>

      <label>
        Degree:
        <select name="selectedFruit">
          {Degree.map((degree) => (
            <option value={degree.degree_name}>{degree.degree_name}</option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default RollNoGeneration;
