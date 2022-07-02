import React from "react";
import Select from "react-select";

function Hero() {
  const categoryList = [
    {
      value: 1,
      label: "Fitness",
    },
    {
      value: 2,
      label: "Nutrition",
    },
    {
      value: 3,
      label: "The Arts",
    },
    {
      value: 4,
      label: "School",
    },
    {
      value: 5,
      label: "Marketing",
    },
  ];

  return (
    <div className="hero">
      <h1 className="titleFonts">Let's Grow!</h1>
      <div>
        <button>Select a topic</button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="/fitness">
            Fitness
          </a>
          <a class="dropdown-item" href="/nutrition">
            Nutrition
          </a>
          <a class="dropdown-item" href="/arts">
            The arts
          </a>
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
