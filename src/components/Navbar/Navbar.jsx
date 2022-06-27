import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div id="div">
      <nav id="navbar">
        <button className="homepage">
          <Link to='/'>
            <p>Home</p>
          </Link>
        </button>
        <button className="joblist" >
          <a href="#">
            Job List
          </a>
        </button>
        <button className="apphistory">
            < a href="#">
              Application History
            </a>
        </button>
        <button className="docs">
          <Link to='/documents'>
              <p>Docs</p>
          </Link>
        </button>
      </nav>
    </div>
  )
}
