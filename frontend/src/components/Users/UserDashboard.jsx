import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    return(
        <>
         <p>
            <button>
                <Link to="/facultyadvisor">Assign Faculty Advisor</Link>
            </button>
          </p>
          <p>
            <button>
                <Link to="/Offeredcourses">Offer courses</Link>
            </button>
          </p>
        </>
       
    );
}
export default UserDashboard;
