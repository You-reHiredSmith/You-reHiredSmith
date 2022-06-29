import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Homepage from './pages/Homepage/Homepage.jsx'
import Documents from './pages/Documents/Documents.jsx'
import store from './store'
import Navbar from './components/Navbar/Navbar.jsx'

export default function App () {
  return (
    // this is providing access to the redux store
    <Provider store={store}>
      {/* stores the current location in the browser's address bar using clean URLs and navigates using the browser's built-in history stack. */}
      <BrowserRouter>
        <Routes>
          {/* NOTE: could also nest all of the routes within the navbar route to display the navbar no matter what page the client is on LOOKUP react router dom nested routes...you'll need an outlet */}
          {/* slash route will display the hompage component */}
          <Route path='/' element={<Homepage />} />
          {/* /documents will display the documents component */}
          <Route path='/documents' element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
