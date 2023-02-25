import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navbar/navbar'
import SideBar from './Sidebar/sidebar'
import StudentDashboard from './Student/Dashboard/dashboard'

function Home() {
  return (
<<<<<<< HEAD
    <>
      <Navigation />
      <div class="d-flex flex-row">
        <SideBar />
        <StudentDashboard />
      </div>
    </>

    // <div>
    //   <p>
    //     <button>
    //         <Link to="/branch">Branch</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/NewStudent">Student</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/caste">Caste</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/category">Category</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/city">City</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/state">State.</Link>
    //     </button>
    //   </p>
    //   <p>
    //     <button>
    //         <Link to="/state">State.</Link>
    //     </button>
    //   </p>
    // </div>
=======
    <div>
      <p>
        <button>
            <Link to="/branch">Branch</Link>
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
            <Link to="/state">State</Link>
        </button>
      </p>
      <p>
        <button>
            <Link to="/state">State</Link>
        </button>
      </p>
    </div>
>>>>>>> 054688a922bfa8c8c21f42a9c940a237e5a9d7b8
  )
}

export default Home
