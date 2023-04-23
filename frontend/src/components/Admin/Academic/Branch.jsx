import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Branch = () => {

  const [branch, setBranch] = useState([]);
  const token = localStorage.getItem('token')
  const fetchAllBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/branch",{
          headers: { authorization: token  }
        });
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
  const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id);
      await axios.delete("http://localhost:3001/branch/"+id,{
        headers: { authorization: token }
      });
      const res = await axios.get("http://localhost:3001/branch",{
        headers: { authorization: token }
      });
        setBranch(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(branch);

  return (
    <div>
        <h1>
            branch info
        </h1>
        <div className="branch">
        {branch.map((branch) => (
          <div key={branch.Branch_id} className="branch">
            <h2>{branch.Branch_id}</h2>
            <p>{branch.Branch_name}</p>
            <p>{branch.HOD}</p>
            <p>{branch.Students_enrolled}</p>
            <button className="delete" onClick={()=>handleDelete(branch.Branch_id)}>Delete</button>
            <button className="update"><Link to = {`/update/${branch.Branch_id}`}>Update</Link></button>
            </div>
        ))}
        <button>
            <Link to="/add">Add new Branch</Link>
        </button>
    </div>
    </div>
  )
}

export default Branch
