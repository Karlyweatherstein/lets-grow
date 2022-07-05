import React from "react";
import { QUERY_TRAINER } from "../../../utils/queries";

function Fitness() {
  return (
    <div className="trainers">
      <div className="trainers-title">
        <h1 className="titleFonts">Meet the Fitness Trainers!</h1>
      </div>
      <div className="trainer-container paragraphFonts">
        <div className="trainers-card mx-3">
          <div className="img-container">
            <a href="">
              <image src="" alt="" className="img-container" />
            </a>
          </div>
          <h3>
            Hi, my name is name, my name is what, my name is chicka chicka slim
            shady
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Fitness;
