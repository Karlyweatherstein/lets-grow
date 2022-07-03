import React, { useState, useReducer } from "react";
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

export function reducer(state, action) {
  return { fitnessVisible: true };
}

function App() {
  // const [result, categoryVal] = useState("categoryOpt");
  // console.log(result);

  const [state, dispatch] = useReducer(reducer, { fitnessVisible: false });

  const [fitnessVisible, setFitnessVisible] = useState(false);
  const [nutritionVisible, setNutritionVisible] = useState(false);
  const [theArtsVisible, setTheArtsVisible] = useState(false);
  const [schoolVisible, setSchoolVisible] = useState(false);
  const [marketingVisible, setMarketingVisible] = useState(false);

  return (
    <Router>
      <div className="App background">
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        {fitnessVisible && <Shop />}
        {nutritionVisible && <Shop />}
        {schoolVisible && <Shop />}
        {marketingVisible && <Shop />}
        {theArtsVisible && <Shop />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
