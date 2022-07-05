import React, { useEffect } from "react";
import TrainerCard from "../TrainerCard";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_TRAINERS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";

function Trainers() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_TRAINERS);

  useEffect(() => {
    if (data) {
      console.log(data);
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);
  console.log(data);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

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
      {state.products.length ? (
        <div className="trainer-container paragraphFonts">
          {filterProducts().map((product) => (
            <TrainerCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default Trainers;
