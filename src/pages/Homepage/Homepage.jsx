import React from 'react'
import { useSelector } from 'react-redux'

import Table from '../../components/Table/Table.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import './Homepage.css'

export default function Homepage () {

  // this is basically mapStateToProps https://www.reactjstutorials.com/react-redux/14/redux-use-selector
  // its identifying which state information the component wants and is then passing it down as props to the table component
  
  const applications = useSelector((state) => {
    // refer here when investigating the appReducer function
    return state.app.applications
  })
  console.log(applications)
  return (
    <div id='home'>
      <div>
        <Navbar />
      </div>
      <div id='content'>
        <Table applications={ applications }/>
      </div>
    </div>
  )
}
