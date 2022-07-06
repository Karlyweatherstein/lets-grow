import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_TRAINER_PRODUCTS } from "../../utils/queries";
import { pluralize } from "../../utils/helpers";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Auth from "../../utils/auth";

function Shop(item) {
  const { data, loading, error } = useQuery(QUERY_TRAINER_PRODUCTS);
  console.log({ error, loading, data });

  const [state, dispatch] = useStoreContext();

  const { name, image, _id, quantity, price, description } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise("cart", "put", {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  if (Auth.loggedIn()) {
    return (
      <div className="shop">
        <div className="trainers">
          <div class="trainers-title">
            <h2 className="titleFonts">Shop!</h2>
          </div>
          <div className="trainer-container paragraphFonts">
            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img alt="product" src="https://picsum.photos/id/24/269/194" />
              </div>
              <h3>My E-Book</h3>
              <p>
                Come read up on all of the magical ways you can be more like
                me!`(Possible tips on underwater basket weaving included)`
              </p>
              <p>Price: 2000.00</p>
              <p>Quantity: THE ONLY ONE`(or is it)`</p>
              <button onClick={addToCart} id="cart-btn-1" className="cart-btn">
                Add to cart
              </button>
            </div>

            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img alt="product" src="https://picsum.photos/id/129/269/194" />
              </div>
              <h3>Book a Session With Me!</h3>
              <p>
                Lets hangout! What else do you need?!`(Possible tips on
                underwater basket weaving included)`
              </p>
              <p>Price: 2.00</p>
              <p>Quantity: Unlimited</p>
              <button onClick={addToCart} id="cart-btn-2" className="cart-btn">
                Add to cart
              </button>
            </div>

            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img
                  alt="product"
                  src="https://picsum.photos/id/1025/269/194"
                />
              </div>
              <h3>Pictures of My Dog!</h3>
              <p>
                She is a small beagle with one ear... come on you know you want
                the picture of a one eared beagle
              </p>
              <p>Price: Priceless</p>
              <p>Quantity: Unlimited</p>
              <button onClick={addToCart} id="cart-btn-3" className="cart-btn">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="shop">
        <div className="trainers">
          <div class="trainers-title">
            <h2 className="titleFonts">Shop!</h2>
          </div>
          <div className="trainer-container paragraphFonts">
            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img alt="product" src="https://picsum.photos/id/24/269/194" />
              </div>
              <h3>My E-Book</h3>
              <p>
                Come read up on all of the magical ways you can be more like
                me!`(Possible tips on underwater basket weaving included)`
              </p>
              <p>Price: 2000.00</p>
              <p>Quantity: THE ONLY ONE`(or is it)`</p>
            </div>

            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img alt="product" src="https://picsum.photos/id/129/269/194" />
              </div>
              <h3>Book a Session With Me!</h3>
              <p>
                Lets hangout! What else do you need?!`(Possible tips on
                underwater basket weaving included)`
              </p>
              <p>Price: 2.00</p>
              <p>Quantity: Unlimited</p>
            </div>

            <div className="trainers-card-shop mx-3">
              <div className="img-container">
                <img
                  alt="product"
                  src="https://picsum.photos/id/1025/269/194"
                />
              </div>
              <h3>Pictures of My Dog!</h3>
              <p>
                She is a small beagle with one ear... come on you know you want
                the picture of a one eared beagle
              </p>
              <p>Price: Priceless</p>
              <p>Quantity: Unlimited</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shop;
