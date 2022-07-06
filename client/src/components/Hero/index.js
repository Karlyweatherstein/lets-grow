import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <h1 className="titleFonts">Let's Grow!</h1>
      <div className="subjectSelect">
        <div className="subjectBtn">
          <Link to="/trainers">
            <button className="submit-button"> Fitness </button>
          </Link>
          <Link to="/trainers">
            <button className="submit-button"> Nutrition </button>
          </Link>
          <Link to="/trainers">
            <button className="submit-button"> The Arts </button>
          </Link>
        </div>
        <div className="subjectBtn">
          <Link to="/trainers">
            <button className="submit-button"> School </button>
          </Link>
          <Link to="/trainers">
            <button className="submit-button"> Marketing </button>
          </Link>
          <Link to="/trainers">
            <button className="submit-button"> Crafts </button>
          </Link>
        </div>
      </div>

      <p className="paragraphFonts">
        Which community are you wanting to grow in? Select a category above for
        a list of our trainers!
      </p>
    </div>
  );
}

export default Hero;
