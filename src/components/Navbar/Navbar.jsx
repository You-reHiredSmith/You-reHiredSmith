import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <div id="div">
      <nav id="navbar">
          <Link className='link' to='/'>
            <p>Home</p>
          </Link>
        <button className="link" >
            Job List
        </button>
        <button className="link">
              Application History
        </button>
          <Link className='link' to='/documents'>
              <p>Docs</p>
          </Link>
      </nav>
    </div>
  )
}
