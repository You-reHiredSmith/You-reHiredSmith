import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApplication } from '../../reducers/appReducers.js'
import Row from '../Row/Row.jsx'
import './Table.css'
import AddApplication from '../AddApplication/AddApplication.jsx'


// more props destructuring here, just receiving the applications prop
export default function Table () {
  const dispatch = useDispatch()
  // if there is data store in state due to user submission this will map that data into individual row components which are then displayed on line 29

  const userId = useSelector((state) => { // get userid
    return state.app.user;
  })
  console.log("userId from Table page: ", userId);

 
  useEffect(()=>{
    dispatch(fetchApplication(userId))
  }, [])

  const applications = useSelector((state) => {
    // refer here when investigating the appReducer function
    return state.app.applications
  })
  

  const output = applications.map((app, key) => {
    return (
          <Row id={app.application_id} companyname={app.companyname} status={app.status} createddate={app.createddate} notes={app.notes} posting={app.posting} key={key}/>
    )
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date Created</th>
            <th>Company Name</th>
            <th>Status</th>
            <th>Contact</th>
            <th>Posting</th>
          </tr>
        </thead>
        <tbody>
          {output}
          {/* passing these strings as props so they can then by used when sending fetch request 
          this is the entire row that is the input fields with the add buton */}
        <AddApplication columns={['createddate', 'companyname', 'status', 'contact', 'posting']} />
        </tbody>
      </table>
    </div>
  )
}
