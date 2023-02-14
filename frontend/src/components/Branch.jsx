import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Branch = () => {

  const [branch, setBranch] = useState([]);

  const fetchAllBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/branch");
        setBranch(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllBranch();
    // eslint-disable-next-line
  }, []);

  console.log(branch);

  return (
    <div>
        <h1>
            branch info
        </h1>
        <button>
            <Link to="/add">Add new Branch</Link>
        </button>
    </div>
  )
}

export default Branch
