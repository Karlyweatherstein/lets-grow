import React from "react";

import { pluralize } from "../../utils/helpers";
import { useQuery } from '@apollo/client';
import { QUERY_TRAINER_PRODUCTS } from '../../utils/queries';

function ShopItem(item) {
const { data } = useQuery(QUERY_TRAINER_PRODUCTS);
console.log('trainer products', data)
  const { image, name, _id, description, key } = item;
  

  return (
    <li key={key} className="card px-1 py-1">
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
        <p>{description}</p>
      <div>
        
      </div>
    </li>
  );
}

export default ShopItem;