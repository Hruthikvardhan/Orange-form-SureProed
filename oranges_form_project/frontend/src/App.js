import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import MainComponent from "./MainComponent/MainComponent";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for login/register (with its own background via CSS/components) */}
        <Route path="/login" element={<AuthPage />} />
        {/* All other routes (Home, Products, Cart, About, etc.) */}
        <Route path="/*" element={<MainComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
