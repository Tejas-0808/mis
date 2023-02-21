import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Masterscheme = () => {

  const [Masterscheme, setMasterscheme] = useState([]);

  const fetchAllMasterscheme = async () => {
    try {
        const res = await axios.get("http://localhost:3001/master_scheme");
        setMasterscheme(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllMasterscheme();
    // eslint-disable-next-line
  }, []);
//   const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/master_scheme/"+id);
      const res = await axios.get("http://localhost:3001/master_scheme");
        setMasterscheme(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(Masterscheme);

  return (
    <div>
        <h1>
            Master Scheme info
        </h1>
        <div className="Masterscheme">
        {Masterscheme.map((Masterscheme) => (
          <div key={Masterscheme.mastersch_id} className="Masterscheme">
            <p>{Masterscheme.master_scheme}</p>
            <p>{Masterscheme.from_year}</p>
            <p>{Masterscheme.to_year}</p>
            <button className="delete" onClick={()=>handleDelete(Masterscheme.mastersch_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addmasterscheme">Add new Master Scheme</Link>
        </button>
    </div>
    </div>
  )
}

export default Masterscheme;
