import React from 'react'
import { Link } from 'react-router-dom'

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
            <Link to="/student">Student</Link>
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
            <Link to="/state">State.</Link>
        </button>
      </p>
    </div>
  )
}

export default Home
