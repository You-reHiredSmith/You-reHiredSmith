import React from 'react'

export default function Row ({
  companyname,
  status,
  createddate,
  notes,
  posting
}) {
  // const sample = props.apps;
  // const sample = [{ companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' },
  //   { companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' },
  //   { companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' }]
  return (
             <tr>
              <td>{createddate}</td>
              <td>{companyname}</td>
              <td>{status}</td>
              <td>{notes}</td>
              <td>{posting}</td>
            </tr>
  )
}
