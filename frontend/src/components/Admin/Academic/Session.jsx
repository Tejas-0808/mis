import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";


const Session = () => {

  const [Session, setSession] = useState([]);

  const fetchAllSession = async () => {
    try {
        const res = await axios.get("http://localhost:3001/session",{
          headers: { authorization: localStorage.getItem('token') }
        });
        setSession(res.data);
        console.log(res.data);
    } catch(err) {
        console.log(err);
    }
}

  useEffect(() => {

    fetchAllSession();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/session',{
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        const data = response.data;
        // const updatedSessions = data.map(item => ({
        //   ...item,
        //   session_name: `${item.term} ${item.year}-${(item.year+1).toString().substring(2)}`
        // }));
        setSession(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete= async (id) =>{
    try{
      console.log(id)
      await axios.delete("http://localhost:3001/session/"+id,{
        headers: { authorization: localStorage.getItem('token') }
      })
      const res = await axios.get("http://localhost:3001/session",{
        headers: { authorization: localStorage.getItem('token') }
      });
      console.log(res.data);
        setSession(res.data);
      // window.location.reload()
      navigate("/session");
    }catch(err){
      console.log(err);
    }

  }
  console.log(Session);

  return (
    <div>
        <h1>
            Session Info 
        </h1>
        <div className="Session">
        {Session.map((Session) => (
          <div key={Session.session_id} className="Session">
            <p>{Session.session_id}</p>
            <p>{Session.session_name}</p>
            <p>{Session.term}</p>
            <p>{Session.year}</p>
            <button className="delete" onClick={()=>handleDelete(Session.session_id)}>Delete</button>
            </div>
        ))}
        <button>
            <Link to="/addsession">Add new Session</Link>
        </button>
    </div>
    </div>
  )
}

export default Session
