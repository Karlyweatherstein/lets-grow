import React from "react";
import { Link } from "react-router-dom";

function Shop() {
  return (
    <div className="shop">
      {/* Filter through categories */}
      {/* <Link to="/Fitness"></Link> */}
      <div className="shop-title">
        <h1>Slim Shady's Shop</h1>
        <h3>
          Hello my name is Marshall Mathers, and I am an art teacher. After
          making a switch from the rap game I now specialize in pastels and
          water color paintings. Please checkout my store below to see if you
          are interested in anything!
        </h3>
      </div>
      <div className="products-container">
        <div className="products-card mx-3">
          <div className="img-container"></div>
          <h3>Wooden paint brushes</h3>
          <button id="cart-btn" class="cart-btn">
            Add to cart
          </button>
        </div>

        <div className="products-card mx-3">
          <div className="img-container"></div>
          <h3>How to paint portraits using realism</h3>
          <button id="cart-btn" class="cart-btn">
            Add to cart
          </button>
        </div>

        <div className="products-card mx-3">
          <div className="img-container"></div>
          <h3>20 drawing prompts</h3>
          <button id="cart-btn" class="cart-btn">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Shop;
