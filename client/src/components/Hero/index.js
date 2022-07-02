import React, { useState } from "react";
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

  // "result" holds the label value and can be used to route to whatever is selected
  const [result, categoryVal] = useState("/" + categoryList.label);
  const categoryValue = (e) => {
    categoryVal(e.label);
  };
  console.log(result);

  return (
    <div className="hero">
      <h1 className="titleFonts">Let's Grow!</h1>
      <div className="dropdown">
        <Select
          options={categoryList}
          placeholder="Select a topic!"
          onChange={categoryValue}
          className="paragraphFonts"
          onClick={result}
        />
      </div>

      <p className="paragraphFonts">
        Which community are you wanting to grow in? Select a category above for
        a list of our trainers!
      </p>
    </div>
  );
}

export default Hero;
