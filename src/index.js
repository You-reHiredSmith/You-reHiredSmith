import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App.jsx"

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
)