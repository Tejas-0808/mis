import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const State = () => {

  const [state, setState] = useState([]);

  const fetchAllBranch = async () => {
    try {
        const res = await axios.get("http://localhost:3001/state");
        setState(res.data);
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
      console.log(id)
      await axios.delete("http://localhost:3001/state/"+id)
      const res = await axios.get("http://localhost:3001/state");
        setState(res.data);
      // window.location.reload()
      // navigate("/"); 
    }catch(err){
      console.log(err);
    }

  }
//   console.log(branch);

  return (
    <div>
        <h1>
            State info
        </h1>
        <div className="State">
        {state.map((state) => (
          <div key={state.state_id} className="State">
            <h2>{state.state_id}</h2>
            <p>{state.state_name}</p>
            <button className="delete" onClick={()=>handleDelete(state.state_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addstate">Add new State</Link>
        </button>
    </div>
    </div>
  )
}

export default State;
