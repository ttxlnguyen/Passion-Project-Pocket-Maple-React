import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/pages/Home";
import Characters from "./components/pages/Characters";
import Bosses from "./components/pages/bosslist/BossList";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <NavBar />
      <main className="main-content">
        <Routes>
          {/* Define other routes that you need*/}
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/bosses" element={<Bosses />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;