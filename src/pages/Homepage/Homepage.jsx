import React from 'react'
import Table from '../../components/Table/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { useSelector } from 'react-redux'

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
      <Navbar />
      <Table applications={ applications }/>
    </div>
  )
}
