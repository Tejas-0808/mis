import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <button>
            <Link to="/branch">Branch</Link>
        </button>
        <button>
            <Link to="/student">Student</Link>
        </button>
    </div>
  )
}

export default Home
