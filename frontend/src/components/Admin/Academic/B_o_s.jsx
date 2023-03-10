import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const B_o_s = () => {

    const  [B_o_s, setB_o_s] = useState([]);

    const fetchB_o_s = async () => {
        try{
            const res = await axios.get("http://localhost:3001/b_o_s");
            setB_o_s(res.data);
            console.log(res.data);
        }   catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchB_o_s();
    },[]);

    const navigate = useNavigate();

    const handleDelete= async (id) =>{
        try{
            console.log(id)
            await axios.delete("http://localhost:3001/b_o_s/"+id)
            const res = await axios.get("http://localhost:3001/b_o_s");
              setB_o_s(res.data);
            // window.location.reload()
            // navigate("/"); 
          }catch(err){
            console.log(err);
          }
    };

    return (<div>
        <h1>B_o_s Management</h1>
        <div className='B_o_s'>
        {B_o_s.map((B_o_s) => (
            <div key={B_o_s.bos_id} className="B_o_s">
                <p>{B_o_s.bos_id}</p>
                <p>{B_o_s.bos_name}</p>
                <button className='update'><Link to={`/updatebos/${B_o_s.bos_id}`}>Update</Link></button>
                <button className="delete" onClick={()=>handleDelete(B_o_s.bos_id)}>Delete</button>
            </div>
        ))}
        </div>
        <button className='AddBos'><Link to='/addbos'>ADD B_o_s</Link></button>
    </div>)
}

export default B_o_s;