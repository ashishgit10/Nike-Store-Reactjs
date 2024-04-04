import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './stores/CartSlice'; // Import the action creator
import "../src/Styles/Item.css";
import Backg from "./Components/Backg";
import styled from "styled-components";

const Main = styled.div`
  position: relative;
  z-index: 9999;
  .mainheight {
    height: 100vh;
  }
  .card1 {
    max-width: 30%;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 10px;
    margin: 18px;
    background: radial-gradient(circle, rgba(255, 255, 255, .7035189076) 50%, rgba(255, 255, 255, .1993172269) 100%);
    box-shadow: 0 8px 20px #00000014;
    transition: all .1s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .card1 img {
    width: 100%;
  }
`;

const Cart = () => {
  const dispatch = useDispatch(); // Get the dispatch function
  const cartProducts = useSelector(state => state.cart);

  // Calculate total price
  const totalPrice = cartProducts.reduce((acc, product) => {
    return acc + parseFloat(product.price.replace('$', ''));
  }, 0);

  const handleRemoveItem = (productId) => {
    console.log("Removing item with id:", productId);
    dispatch(removeFromCart(productId)); // Dispatch action to remove item from cart
};

  return (
    <>
      <Backg />
      <Main>
        <div className='mainheight'>
          {cartProducts.length === 0 ? (
            <div className="text-center">Add items to your cart</div>
          ) : (
            <>
              <div className="">
                {cartProducts.map(product => (
                  <div key={product.id} className="card1">
                    <img src={product.image} alt={product.name} data-aos="zoom-in" />
                    <div className="productdata">
                      <h4 className='bg-zinc-950'>{product.name}</h4>
                      <span>{product.price}</span>
                      <button onClick={() => handleRemoveItem(product.id)}>Remove Item</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                Total Price: ${totalPrice.toFixed(2)}
              </div>
            </>
          )}
        </div>
      </Main>
    </>
  );
};

export default Cart;
