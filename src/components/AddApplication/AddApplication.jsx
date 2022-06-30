import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './AddApplication.css'
import { appendApplication, postApplication } from '../../reducers/appReducers'
//import { addApplicationActionCreator } from '../../actions/actions'

export default function AddApplication ({
  columns
}) {
  // this is basically mapDispatchToProps
  // useDispatch will allow the dispatching of actions withough connecting the component with connect method. https://www.reactjstutorials.com/react-redux/18/redux-use-dispatch
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.app.user);

  //async 
  function addApplication () {
    const form = document.querySelectorAll('.form')
    const body = {}
    form.forEach((el) => {
      // setting the key in the object to be the current elements id property..check line 39s id attribute.. 
      // also remember these values are coming from the array of strings being passed as props to this component
      // setting its value to be whats inside of the input field
      body[el.id] = el.value
    })
    body.notes = ''
    body.priority = ''
    // they've hard coded the user id to just be one.
    body.userId = userId
    console.log(body)
    // this is what the body that will be sent in the fetch now looks like:  

    // application_id: 136
    // companyname: "g"
    // createddate: ""
    // notes: ""
    // posting: "g"
    // priority: ""
    // status: "g"
    // user_id: 1
/*
    try {
      await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: (JSON.stringify(body))
      })
      // after the fetch has succeded, this dispatch will send the user input off to be updated into the state
      dispatch(appendApplication(body))
    } catch (err) {
      console.log(err)
    }
*/
    dispatch(postApplication(body)); // database post call
    dispatch(appendApplication(body)); // just appending item to screen
  } //end of addApplication function 

  // creating all the input fields using the array of strings that were passed as props so each input has an appropriate id for the above fetch request body
  const inputs = columns.map((column, i) => <td key={`input${i}`}><input type="text" id={column} className="form" /></td>)

  return (
    <tr>
      {inputs}
      <td><button onClick={addApplication}>Add</button></td>
    </tr>
  )
}
