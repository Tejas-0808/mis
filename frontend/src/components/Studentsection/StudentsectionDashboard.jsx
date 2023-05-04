import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import SideBar from "./sidebar";

const StudentsectionDashboard = () => {
    return(
        <>
        <SideBar />
         <p>
            <button>
                <Link to="/newstudent">Admit New Student</Link>
            </button>
          </p>
          <p>
            <button>
                <Link to="/category"> Category</Link>
            </button>
          </p>
        </>
       
    );
}
export default StudentsectionDashboard;

