import React, { useEffect } from "react";

import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function Trainers() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }
  
  return (
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

        <div className="trainers-card mx-3">
          <div className="img-container"></div>
          <h3>
            Hi my name is who, my name is what, my name is chicka chicka slim
            shady
          </h3>
        </div>

        <div className="trainers-card mx-3">
          <div className="img-container"></div>
          <h3>
            Hi my name is who, my name is what, my name is chicka chicka slim
            shady
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
