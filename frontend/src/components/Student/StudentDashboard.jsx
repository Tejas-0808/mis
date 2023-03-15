import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const StudentDashboard = () => {
    return(
        <>
         <p>
            <button>
                <Link to="/PersonalDetails">Student Profile</Link>
            </button>
          </p>
          <p>
            <button>
                <Link to="/Education_details">Educational detials</Link>
            </button>
          </p>
        </>
       
    );
}
export default StudentDashboard;
