import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApplication } from '../../reducers/appReducers.js'
import Table from '../../components/Table/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.css'

export default function Homepage () {
  const dispatch = useDispatch()

  // this is basically mapStateToProps https://www.reactjstutorials.com/react-redux/14/redux-use-selector
  // its identifying which state information the component wants and is then passing it down as props to the table component

  //fetching from database call when this component first renders
/*
  const userId = useSelector((state) => { // get userid
    return state.app.user;
  })
  console.log("userId: ", userId);
*/

  

  // const applications = useSelector((state) => {
  //   // refer here when investigating the appReducer function
  //   return state.app.applications
  // })
  // console.log(applications)

  return (
    <div id='home'>
      <div>
        <Navbar />
      </div>
      <div id='content'>
        <Table />
      </div>
    </div>
  )
}
