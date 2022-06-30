import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApplication } from '../../reducers/appReducers.js'
import Table from '../../components/Table/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.css'

export default function Homepage () {

  // this is basically mapStateToProps https://www.reactjstutorials.com/react-redux/14/redux-use-selector
  // its identifying which state information the component wants and is then passing it down as props to the table component

  
  //console.log(applications)

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
