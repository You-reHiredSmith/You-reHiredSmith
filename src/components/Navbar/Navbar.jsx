import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import img from '../../img/hiresmith.png'

export default function Navbar () {
  // using link from react router instead of a elements
  return (
    <div id="div">
      <nav id="navbar">
        <img id='img' src={img}></img>
          <Link className="homepage" to='/'>
            <p>Home</p>
          </Link>
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
