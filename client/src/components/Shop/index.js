import React from 'react';
import ShopItem from '../ShopItem';
import { useQuery } from '@apollo/client';
import { QUERY_TRAINER_PRODUCTS } from '../../utils/queries';
import { Link } from 'react-router-dom';
import { pluralize } from '../../utils/helpers';
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";




function Shop(item) {
  const {  loading, data } = useQuery(QUERY_TRAINER_PRODUCTS);
  console.log('products', data);

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
        <div> className='shop-title'>
            <h1 className='titleFonts'>{data.trainer.name}</h1>
            <h3 className='paragraphFonts'>
                          {data.trainer.description}
            </h3>
         </div>   {data ? ( 
          <div className='products-container paragraphFonts' >
            <div className='products-card mx-3'>
              <div className='img-container'>
              {data.products.map((trainer) => (
            <ShopItem
              key={trainer._id}
              _id={trainer._id}
              image={trainer.image}
              name={trainer.name}
              description={trainer.description}
            />
          ))}
                  {quantity} {pluralize('item', quantity)} in stock
                </div>
                <span>${price}</span>
              </div>
              <button onClick={addToCart} id='cart-btn' className='cart-btn'>
                Add to cart
              </button>
            </div>
            ) : (
              <h3>You haven't added any trainer yet!</h3>
            )}
            {loading ? <img src='' alt="loading" /> : null}
          </div>
         
     
       
     );
}

export default Shop;
