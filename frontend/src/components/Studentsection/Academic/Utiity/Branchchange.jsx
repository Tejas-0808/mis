import React from 'react'
import { useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Branchchange() {
  const [Branchchange, setBranch] = useState({
    roll_no: "",
    Branch: ""
  });

  const navigate = useNavigate();
  const location = useLocation();
  
 // const B_id = location.pathname.split("/")[2];

//   const fetchBranch = async () => {
//     try {
//         const res = await axios.get("http://localhost:3001/particularstudent/"+ Branchchange.roll_no);
//         setBranch(res.data);
//         // console.log(res.data+"!");
//         console.log(Branchchange);
//     } catch(err) {
//         console.log(err);
//     }
// }

  // useEffect(() => {

  //   fetchBranch();
  //   // eslint-disable-next-line
  // }, []);


  const handleChange = (e) => {
    setBranch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const fetchStubranch = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get("http://localhost:3001/particularstudent/"+ Branchchange.roll_no);
            setBranch(res.data);
            // console.log(res.data+"!");
            console.log(Branchchange);
           
        } catch(err) {
            console.log(err);
        }
  }
  const handleClick = async (e) => {
        e.preventDefault();
        try {
          console.log(Branchchange);
          await axios.put("http://localhost:3001/particularstudent/" + Branchchange.roll_no, Branchchange);
          // navigate("/PersonalDetails");
        } catch (err) {
          console.log(err);
          // setError(true)
        }
      };

  // console.log(branch[0]);
  // let bro =  branch[0];
  console.log(Branchchange);
  return (
    <div className="form">
      Branch Change
      <br/>
      <input type="text" placeholder="Roll No" name="roll_no" value={Branchchange.roll_no} onChange={handleChange}/>
      <input type="text" placeholder="Branch" name="Branch" value={Branchchange.Branch} onChange={handleChange}/>
      <button onClick={fetchStubranch}>fetch</button>
      <button onClick={handleClick}>Update</button>

    </div>
  )
}

export default Branchchange

