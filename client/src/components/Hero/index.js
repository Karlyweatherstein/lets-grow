import React, { useState, useEffect } from "react";
import { renderMatches } from "react-router-dom";
import Select from "react-select";

function Hero() {
  const categoryList = [
    {
      value: "fitness",
      label: "Fitness",
    },
    {
      value: "nutrition",
      label: "Nutrition",
    },
    {
      value: "theArts",
      label: "The Arts",
    },
    {
      value: "school",
      label: "School",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
  ];

  // // "result" holds the label value and can be used to route to whatever is selected
  const [result, categoryVal] = useState("categoryOpt");
  const categoryValue = (e) => {
    categoryVal(e.target.value);
  };
  console.log(result);

  const [fitnessVisible, setFitnessVisible] = useState(false);
  const [nutritionVisible, setNutritionVisible] = useState(false);
  const [theArtsVisible, setTheArtsVisible] = useState(false);
  const [schoolVisible, setSchoolVisible] = useState(false);
  const [marketingVisible, setMarketingVisible] = useState(false);

  useEffect(() => {
    result === "fitness" ? setFitnessVisible(true) : setFitnessVisible(false);
    result === "nutrition"
      ? setNutritionVisible(true)
      : setNutritionVisible(false);
    result === "school" ? setSchoolVisible(true) : setSchoolVisible(false);
    result === "theArts" ? setTheArtsVisible(true) : setTheArtsVisible(false);
    result === "marketing"
      ? setMarketingVisible(true)
      : setMarketingVisible(false);
  }, [result]);

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
          value={result}
        />
      </div>
      {/* {fitnessVisible && <Shop />}
      {nutritionVisible && <Shop />}
      {schoolVisible && <Shop />}
      {marketingVisible && <Shop />}
      {theArtsVisible && <Shop />}
 */}
      <p className="paragraphFonts">
        Which community are you wanting to grow in? Select a category above for
        a list of our trainers!
      </p>
    </div>
  );
}

export default Hero;
