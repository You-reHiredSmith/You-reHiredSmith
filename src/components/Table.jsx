import React from 'react';
import Row from './Row.jsx'




export default function Table() {

  return (
    <table>
      <thead>
        <tr>
          <th>Company Name ID</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Notes</th>
          <th>Posting</th>
        </tr>
      </thead>
      <tbody>
        < Row />
      </tbody>
    </table>
 
  )
}