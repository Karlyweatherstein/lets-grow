import React from "react";
import TrainerCard from "../TrainerCard";
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_TRAINERS } from '../../utils/queries';

function Trainers() {
  const { loading, data } = useQuery(QUERY_TRAINERS);
  console.log('hello world', data)


  // useEffect(() => {
  //   if (data) { 
  //      console.log(data.products);
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });
  //     data.products.forEach((product) => {
  //       idbPromise('products', 'put', product);
  //     });
  //     console.log('see if this works' + data)
  //   } else if (!loading) {
  //     console.log('loading' + loading);
  //     idbPromise('products', 'get').then((products) => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: products,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);

  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     (product) => product.category._id === currentCategory
  //   );
  // }
  return (
    // <div className="trainers">
    //   <div className="trainers-title">
    //     <h1 className="titleFonts">Meet the Trainers!</h1>
    //   </div>
    //   <div className="trainer-container paragraphFonts">
    //     <div className="trainers-card mx-3">
    //       <div className="img-container"></div>
    //       <h3>
    //         Hi my name is who, my name is what, my name is chicka chicka slim
    //         shady
    //       </h3>
    //     </div>
    //   </div>
    // </div>
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
              // price={trainer.price}
              // quantity={trainer.quantity}
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
