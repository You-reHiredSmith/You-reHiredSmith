import React from 'react';
import Row from '../Row/Row.jsx'
import './Table.css'




export default function Table() {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company Name ID</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Date Created</th>
            <th>Notes</th>
            <th>Posting</th>
          </tr>
        </thead>
        <tbody>
          < Row />
        </tbody>
      </table>
    </div>
 
  )
}