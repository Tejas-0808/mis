import { Link } from 'react-router-dom'
import Navigation from './Navbar/navbar'
import SideBar from './Sidebar/sidebar'
import StudentDashboard from './Student/Dashboard/dashboard'
import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Home() {

  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');


  useEffect(() => {
    const token = localStorage.getItem('token');
  //    setToken(localStorage.getItem('token'))
    console.log(token);
    if (token) {
      axios.get('http://localhost:3001/me', {
        headers: { Authorization: token }
      }).then((response) => {
        setUsername(response.data.username);
      }).catch((err) => {
        localStorage.setItem('token', "");
        console.error(err);
      });
    }
  }, []);

  const Logout = () => {
    localStorage.setItem('token', "");
    window.location.reload();
  };

  return (
    <>
      <p>
      <p>Welcome, {username}!</p>
      <button onClick={Logout}>logout</button>
      </p>
      <p> 
        <button>
          <Link to="/branch">Branch</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/NewUser">New Staff</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/NewStudent">New Student</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/caste">Caste</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/category">Category</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/city">City</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/state">State.</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/personaldetails">Personal details</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/imageshow">IMAGE TEST</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/schemeallotment">Scheme Allotment TEST</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/facultyadvisor">Assign FACULTY ADVISOR</Link>
        </button>
      </p>
      <p>
        <button>
          <Link to="/offeredcourses">Offered Courses</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/createuserlogin">login creation</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/createstudlogin">student login creation</Link>
        </button>
      </p>
      {/* <Navigation/>
      <div className='d-flex'>
      <SideBar/>
      <StudentDashboard/>
      </div> */}


    </>
  )
}

export default Home
