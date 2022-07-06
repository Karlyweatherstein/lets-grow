import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_TRAINER } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";



function Shop(item) {
  // const {  loading, data } = useQuery(QUERY_TRAINER);

  // console.log("data for single trainer: ", data);
  const [state, dispatch] = useStoreContext();

  const {
    image,
    _id,
    quantity,
    price,
    description
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }
  return (

        <div className='shop'>
          <div className='shop-title'>
            <h1 className='titleFonts'>Slim Shady's Shop</h1>
            <h3 className='paragraphFonts'>
              {/* Hello my name is Marshall Mathers, and I am an art teacher. After
              making a switch from the rap game I now specialize in pastels and
              water color paintings. Please checkout my store below to see if you
              are interested in anything! */}
              {description}
            </h3>
          </div>
          <div className='products-container paragraphFonts' >
            <div className='products-card mx-3'>
              <div className='img-container'>
                <Link to={`/shop/${_id}`}>
                  <img alt={image} src={`/images/${image}`} />
                  <h3>{}</h3>
                </Link>
              </div>
              <div>
                <div>
                  {quantity} {pluralize('item', quantity)} in stock
                </div>
                <span>${price}</span>
              </div>
              <button onClick={addToCart} id='cart-btn' className='cart-btn'>
                Add to cart
              </button>
            </div>
          </div>
        </div>
   
    //   ) : (
    //     <h3>You haven't added any products yet!</h3>
    //   )}
    //   {loading ? <img src='' alt="loading" /> : null}
    // </div>
  );
}

export default Shop;
