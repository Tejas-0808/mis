import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navbar/navbar'
import SideBar from './Sidebar/sidebar'
import StudentDashboard from './Student/Dashboard/dashboard'

function Home() {
  return (
    <div>
      <p>
        <button>
            <Link to="/branch">Branch</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/NewUser">Faculty</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/NewStudent">Student</Link>
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
    </div>
  )
}

export default Home
