import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Homepage from "./pages/Homepage/Homepage.jsx";
import Documents from "./pages/Documents/Documents.jsx";
import store from './store'


export default function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/documents" element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
