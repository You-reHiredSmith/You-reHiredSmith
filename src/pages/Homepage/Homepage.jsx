import React from 'react'
import { useSelector } from 'react-redux'

import Table from '../../components/Table/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.css'

export default function Homepage () {
  // const rowArray = row.map(el => {
  //   const rw = Object.values(el)
  //     <td>{rw}</td>;
  //   })
  const applications = useSelector((state) => {
    return state.app.applications
  })
  console.log(applications)
  return (
    <div id='home'>
      <div>
        <Navbar />
      </div>
      <div id='content'>
        <Table applications={ applications }/>
      </div>
    </div>
  )
}
