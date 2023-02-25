import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Structure = () => {
  const [structure, setStructure] = useState([]);

  const fetchAllStructure = async () => {
    try {
      const res = await axios.get("http://localhost:3001/structure");
      setStructure(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllStructure();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      console.log(id);
      await axios.delete("http://localhost:3001/structure/" + id);
      const res = await axios.get("http://localhost:3001/structure");
      setStructure(res.data);
      // window.location.reload()
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(structure);

  return (
    <div>
      <h1>Structure</h1>
      <div className="structure">
        {structure.map((structure) => (
          <div key={structure.strid} className="structure">
            <h2>{structure.strid}</h2>
            <p>{structure.scheme_id}</p>
            <p>{structure.category}</p>
            <p>{structure.branch_id}</p>
            <p>{structure.board_of_study}</p>
            <p>{structure.coursecode}</p>
            <p>{structure.coursename}</p>
            <p>{structure.lecture}</p>
            <p>{structure.tut}</p>
            <p>{structure.pract}</p>
            <p>{structure.ise1}</p>
            <p>{structure.ise2}</p>
            <p>{structure.ise3}</p>
            <p>{structure.PR}</p>
            <p>{structure.TW}</p>
            <p>{structure.ese}</p>
            <p>{structure.total_marks}</p>
            <p>{structure.total_credits}</p>
            <button
              className="delete"
              onClick={() => handleDelete(structure.strid)}
            >
              Delete
            </button>
            <button className="update">
              <Link to={`/updatestructure/${structure.strid}`}>Update</Link>
            </button>
          </div>
        ))}
        <button>
          <Link to="/addstructure">Add new Structure</Link>
        </button>
      </div>
    </div>
  );
};

export default Structure;
