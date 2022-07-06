import React from "react";
import TrainerCard from "../TrainerCard";
import { useQuery } from '@apollo/client';
import { QUERY_TRAINERS } from '../../utils/queries';

function Trainers(item) {
  const { loading, data } = useQuery(QUERY_TRAINERS);
  console.log('hello world', data)

  return (

    <div className="trainers">
      <div className="trainers-title">
        <h2 className="titleFonts">Meet the Trainers!</h2>
      </div>
      {data ? (
        <div className="trainer-container paragraphFonts">
          {data.trainers.map((trainer) => (
            <TrainerCard
              key={trainer._id}
              _id={trainer._id}
              image={trainer.image}
              name={trainer.name}
              description={trainer.description}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any trainer yet!</h3>
      )}
      {loading ? <img src='' alt="loading" /> : null}
    </div>
  );
}

export default Trainers;
