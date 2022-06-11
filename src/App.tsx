import React from "react";
import "./style/App.css";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/homepage";
import SoundPage from "./pages/soundpage";
import Timer from "./pages/timer";
import AudioPage from "./pages/audiopage";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sound" element={<SoundPage />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="audio" element={<AudioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
