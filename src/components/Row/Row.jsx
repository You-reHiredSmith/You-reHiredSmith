import React from 'react'

export default function Row () {
  const sample = [{ companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' },
    { companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' },
    { companyname: 'riot', status: 'hired', priority: 'top', createddate: '1/21/22', notes: 'hi', posting: 'bye' }]

  const output = sample.map((value, key) => {
    return (
            <tr key={key}>
              <td>{value.companyname}</td>
              <td>{value.status}</td>
              <td>{value.priority}</td>
              <td>{value.createddate}</td>
              <td>{value.notes}</td>
              <td>{value.posting}</td>
            </tr>

    )
  })
  console.log(output)
  return (
        <>
         {output}
        </>
  )
}
