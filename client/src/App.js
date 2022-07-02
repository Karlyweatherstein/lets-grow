import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";

import Shop from "./components/Shop";
import Signup from "./components/Signup";
import Trainers from "./components/Trainers";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App background">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Hero />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/" element={<Trainers />} /> */}
          <Route path="/" element={<Shop />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
