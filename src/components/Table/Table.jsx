import React from 'react'
import Row from '../Row/Row.jsx'
import './Table.css'
import AddApplication from '../AddApplication/AddApplication.jsx'

export default function Table ({applications}) {
  const output = applications.map((app, key) => {
    return (
          <Row companyname={app.companyname} status={app.status} createddate={app.createddate} notes={app.notes} posting={app.posting} key={key}/>
    )
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date Created</th>
            <th>Company Name ID</th>
            <th>Status</th>
            <th>Contact</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {output}
      < AddApplication columns={['createddate', 'companyname', 'status', 'contact', 'posting']} />
        </tbody>
      </table>
    </div>
  )
}
