import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  // const categoryList = [
  //   {
  //     value: "fitness",
  //     label: "Fitness",
  //   },
  //   {
  //     value: "nutrition",
  //     label: "Nutrition",
  //   },
  //   {
  //     value: "theArts",
  //     label: "The Arts",
  //   },
  //   {
  //     value: "school",
  //     label: "School",
  //   },
  //   {
  //     value: "marketing",
  //     label: "Marketing",
  //   },
  // ];

  // // "result" holds the label value and can be used to route to whatever is selected
  // const [result, categoryVal] = useState(categoryList.label);
  // const categoryValue = (e) => {
  //   categoryVal(e.label);
  // };
  // console.log(result);

  return (
    <div className="hero">
      <h1 className="titleFonts">Let's Grow!</h1>
      <div className="subjectSelect">
        <div className="subjectBtn">
          <Link to="/fitness">
            <button className="submit-button"> Fitness </button>
          </Link>
          <Link to="/nutrition">
            <button className="submit-button"> Nutrition </button>
          </Link>
          <Link to="/theArts">
            <button className="submit-button"> The Arts </button>
          </Link>
        </div>
        <div className="subjectBtn">
          <Link to="/school">
            <button className="submit-button"> School </button>
          </Link>
          <Link to="/marketing">
            <button className="submit-button"> Marketing </button>
          </Link>
          <Link to="/crafts">
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
