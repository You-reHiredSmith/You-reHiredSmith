import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './Row.css'
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


  const setColor = (input) => {
    const compStatus = input.toLowerCase();
    if (compStatus === "submitted") return 'submitted';
    if (compStatus === "in progress") return 'inProgress';
    if (compStatus === "incomplete") return 'incomplete';
  }

  return (
            <>
            <tr id={setColor(status)}>
              <td>{createddate}</td>
              <td>{companyname}</td>
              <td onClick={() => setNotesOpen(!notesOpen)}>{status}</td>
              <td>{notes}</td>
              <td>{posting}</td>
              <td><button onClick={deleteApplication}>Delete</button></td>
            </tr>
            <tr>
            {notesOpen ? <Notes notes={notes}/> : null}
            </tr>
            </>
  )
}
