import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useQuery } from '@apollo/client';
import { QUERY_TRAINERS } from '../../utils/queries';





function TrainerCard(item) {
const { data } = useQuery(QUERY_TRAINERS);

  const { image, name, _id, description, key } = item;
  

  return (
    <li key={key}>
      <Link to={`/shop`}>
        <div className="trainers">
        <div className="trainer-container paragraphFonts">
        <div className="trainers-card mx-3">
          
        <div className="img-container">
        <img alt={name} src={`${image}`} />
        </div>
        <p>{name}</p>
        <p>{description}</p>
        </div>
        </div>
        </div>
      </Link>
      <div>
        
      </div>
    </li>
  );
}

export default TrainerCard;

 <div className="trainers">
      <div className="trainers-title">
        <h1 className="titleFonts">Meet the Trainers!</h1>
      </div>
      <div className="trainer-container paragraphFonts">
        <div className="trainers-card mx-3">
          <div className="img-container"></div>
          <h3>
            Hi my name is who, my name is what, my name is chicka chicka slim
            shady
          </h3>
        </div>
      </div>
    </div>