import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/pages/home/Home.js";
import Characters from "./components/pages/characters/Characters";
import Bosses from "./components/pages/bosslist/BossList.jsx";

const App = () => {
  return (
    <Router>
      <NavBar /> {/* Navigation bar component */}
      <main className="main-content">
        <Routes> {/* Define routes*/}
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/bosses" element={<Bosses />} /> {/* Route to Bosses component */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;