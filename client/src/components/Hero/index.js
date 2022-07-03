import React, { useState, useEffect, Reducer } from "react";
import { renderMatches } from "react-router-dom";
import Select from "react-select";
import { reducer } from "../../App";

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
  const [result, categoryVal] = useState(categoryList.label);
  const categoryValue = (e) => {
    categoryVal(e.label);
  };
  console.log(result);

  if (result === "Fitness") {
    reducer();
  }

  // useEffect(() => {
  //   result === "Fitness" ? setFitnessVisible(true) : setFitnessVisible(false);
  //   result === "Nutrition"
  //     ? setNutritionVisible(true)
  //     : setNutritionVisible(false);
  //   result === "School" ? setSchoolVisible(true) : setSchoolVisible(false);
  //   result === "The Arts" ? setTheArtsVisible(true) : setTheArtsVisible(false);
  //   result === "Marketing"
  //     ? setMarketingVisible(true)
  //     : setMarketingVisible(false);
  // }, [result]);

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
