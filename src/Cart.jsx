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
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width:450px){
    .mainheight {
        flex-direction: column !important;
        align-items: center;
        justify-content: normal;
  } 
  .center{
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .cartdet {
    height:7rem !important;
    max-width: 70% !important;
padding-inline:45px !important;
  }
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
  .cartdet {
    background-color: green;
    padding: 10px;
    margin: 18px;
    border-radius: 20px;
    max-width: 30%;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 10px;
    margin: 18px;
    background: radial-gradient(circle, rgba(255, 255, 255, .7035189076) 50%, rgba(255, 255, 255, .1993172269) 100%);
    box-shadow: 0 8px 20px #00000014;
    transition: all .1s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover {
      transform: scale(1.1);
    }
    height:10rem
  }
  .btn{
    background-color: black;
    padding:10px;
    color:white;
    font-weight: bold;
border-radius: 10px;
  }
  .rmbtn{
    display:flex;
    justify-content:space-between;
    align-items: center;
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
                        <div className="text-center ">Add items to your cart</div>
                    ) : (
                        <div className="display:flex;justify-content:evenly center">
                            {cartProducts.map(product => (
                                <div key={product.id} className="card1">
                                    <img src={product.image} alt={product.name} data-aos="zoom-in" />
                                    <div className="productdata">
                                        <h4 className='bg-zinc-950'>{product.name}</h4>
                                        <div className='rmbtn'>
                                            <span>{product.price}</span>
                                            <button className='btn' onClick={() => handleRemoveItem(product.id)}>Remove Item</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="cartdet ">

                        <div>

                            Total Price: ${totalPrice.toFixed(2)}
                        </div>

                        <div>
                            <button className='btn'>Buy Now</button>
                        </div>

                    </div>

                </div>
            </Main>
        </>
    );
};

export default Cart;
