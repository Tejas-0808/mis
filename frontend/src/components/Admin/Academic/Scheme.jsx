import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Scheme = () => {

  const [scheme, setScheme] = useState([]);

  const fetchAllScheme = async () => {
    try {
        const res = await axios.get("http://localhost:3001/scheme");
        setScheme(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllScheme();
    // eslint-disable-next-line
  }, []);
//   const navigate = useNavigate();

  
  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/scheme/"+id)
      const res = await axios.get("http://localhost:3001/scheme");
        setScheme(res.data);
      // window.location.reload()
      // navigate("/");
    }catch(err){
      console.log(err);
    }

  }
  console.log(scheme);

  return (
    <div>
        <h1>
            Scheme info
        </h1>
        <div className="scheme">
        {scheme.map((scheme) => (
          <div key={scheme.scid} className="scheme">
            <p>{scheme.scid}</p>
            <p>{scheme.master_sch_id}</p>
            <p>{scheme.category}</p>
            <p>{scheme.ft}</p>
            <p>{scheme.pt}</p>
            <button className="delete" onClick={()=>handleDelete(scheme.scid)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addscheme">Add new Scheme</Link>
        </button>
    </div>
    </div>
  )
}

export default Scheme
