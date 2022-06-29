import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Notes from '../Notes/Notes.jsx'
import { deleteApplicationActionCreator } from '../../actions/actions.js'

// destructuring all the props 
export default function Row ({
  companyname,
  status,
  createddate,
  notes,
  posting,
  id
}) {
  const [notesOpen, setNotesOpen] = useState(false)
  const dispatch = useDispatch()

  async function deleteApplication () {
    try {
      await fetch(`/api/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // updating the state after the succesful fetch
      dispatch(deleteApplicationActionCreator(id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
            <>
             <tr>
              <td>{createddate}</td>
              <td>{companyname}</td>
              <td onClick={() => setNotesOpen(!notesOpen)}>{status}</td>
              <td>{notes}</td>
              <td>{posting}</td>
              <td><button onClick={deleteApplication}>Delete</button></td>
            </tr>
            <tr>
              {/* conditionally rendering the notes based on state from line 16 and 39..*/}
              {notesOpen ? <Notes notes={notes}/> : null}
            </tr>
            </>
  )
}
