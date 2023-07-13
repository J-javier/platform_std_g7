import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./components/Filtered.jsx"
import App from "./App.jsx";
import "./App.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/platform_std_g7/" element={<App />} />
        <Route path="/platform_std_g7/main" element={<Filter />} />
        <Route path="/platform_std_g7/*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
