import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/pages/home/Home.js";
import Characters from "./components/pages/characters/Characters";
import Bosses from "./components/pages/bosslist/Bosses.jsx"; // Make sure this is the correct import path

const App = () => {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/bosses" element={<Bosses />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;