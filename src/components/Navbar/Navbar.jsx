import React from 'react'
import './Navbar.css'

export default function Navbar() {

  return (
    <div id="div">
      <nav id="navbar">
        <button className="homepage">
          < a href="#">
            Home
          </a>
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
          < a href="#">
            Docs
          </a>
        </button>
      </nav>
    </div>
  )
}