import React from 'react'

export default function Navbar () {
  return (
    <nav className="navbar">
      <button className="homepage" href="#">
        Home
      </button>
      <button className="joblist" href="#">
        Job List
      </button>
      <button className="apphistory" href="#">
        Application History
      </button>
      <button className="docs" href="./pages/Documents/Documents.jsx">
        Docs
      </button>
    </nav>
  )
}
