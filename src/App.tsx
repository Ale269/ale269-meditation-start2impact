import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Audio from "./pages/audio";
import HomePage from "./pages/homepage";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/audio">Audio</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </Router>
  );
}

export default App;
