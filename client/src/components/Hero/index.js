import React from "react";

function Hero() {
  function dropFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="hero">
      <h1 className="titleFonts">Let's Grow!</h1>
      <div className="dropdown">
        <button onClick="dropFunction" className="dropdownBtn paragraphFonts">
          Select a topic
        </button>
        <div className="dropOptions paragraphFonts">
          <a href="#">Fitness</a>
          <a href="#">Nutrition</a>
          <a href="#">The arts</a>
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
