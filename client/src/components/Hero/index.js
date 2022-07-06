import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <h1 className="titleFonts heroTitle">Let's Grow!</h1>
      <div className="subjectSelect">
        <div className="subjectBtn">
          <Link to="/trainers">
            <button className="submit-button paragraphFonts">
              Meet the Trainers!
            </button>
          </Link>
        </div>
      </div>

      <p className="paragraphFonts heroParagraph">
        Which community are you wanting to grow in? Select the "About" tab to
        learn more about us or select the button above to meet our trainers!
      </p>
    </div>
  );
}

export default Hero;
