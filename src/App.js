import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from './store'
import { Provider } from 'react-redux'
import Homepage from "./pages/Homepage/Homepage.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  )
};

