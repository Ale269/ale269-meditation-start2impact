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
import SoundPage from "./pages/soundpage";
import Timer from "./pages/timer";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/">
          <i className="fa-solid fa-house"></i>
        </NavLink>
        <NavLink to="/audio">Audio</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/soundPage" element={<SoundPage />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
}

export default App;
