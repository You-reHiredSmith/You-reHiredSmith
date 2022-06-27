import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Homepage from './pages/Homepage/Homepage'

export default function App () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
