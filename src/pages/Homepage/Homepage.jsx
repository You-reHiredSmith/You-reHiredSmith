import React from 'react'
import Table from '../../components/Table'
import Navbar from '../../components/Navbar'

export default function Homepage () {
  // const rowArray = row.map(el => {
  //   const rw = Object.values(el)
  //     <td>{rw}</td>;
  //   })

  return (
    <div>
      <Navbar />
      <Table />
    </div>
  )
}
