import React, { useState } from 'react'
import Notes from '../Notes/Notes.jsx'


export default function Row ({
  companyname,
  status,
  createddate,
  notes,
  posting
}) {
  const [notesOpen, setNotesOpen] = useState(false);
  return (
            <>
             <tr>
              <td>{createddate}</td>
              <td>{companyname}</td>
              <td onClick={() => setNotesOpen(!notesOpen)}>{status}</td>
              <td>{notes}</td>
              <td>{posting}</td>
            </tr>
            <tr>
              {notesOpen ? <Notes notes={notes}/> : null}
            </tr>
            </>
  )
}
