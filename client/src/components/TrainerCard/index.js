import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers";
import { useQuery } from '@apollo/client';
import { QUERY_TRAINERS } from '../../utils/queries';

function TrainerCard(item) {
const { data } = useQuery(QUERY_TRAINERS);

  const { image, name, _id, description, key } = item;
  

  return (
    <li key={key} className="card px-1 py-1">
      <Link to={`/shop`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
        <p>{description}</p>
      </Link>
      <div>
        
      </div>
    </li>
  );
}

export default TrainerCard;
