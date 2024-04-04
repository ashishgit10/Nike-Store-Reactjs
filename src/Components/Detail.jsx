import React, { useState, useEffect } from "react";
import Backg from "./Backg";
import styled from "styled-components";
import Data from "../Data";
import { useParams } from "react-router-dom";
import "../Styles/Detailmediaqueries.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useDispatch } from 'react-redux';
import { add } from "../stores/CartSlice";

const Main = styled.div`
  background: linear-gradient(to bottom, #fcddff, #d6d6d6);
  height: 120vh;
  h5 {
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
  }
  .main1 {
    padding-top: 60px;
    max-width: 1200px;
    margin: auto;
    position: relative;
    display: flex;
    z-index: 999;
 
  }
  .main2 {
    display: flex;
    flex-wrap: wrap;
  }
  .bigimg {
    margin: 20px;
    width: 46%;
  }
  .bigimg > img {
    width: 100%;
    height: 90%;
    border-radius: 10px;
  }
  .detailbox {
    width: 46%;
    padding: 5px 20px 20px 20px;
  }
  .title {
    font-size: 50px;
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    margin-bottom: 30px;
  }
  h4 {
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .description {
    font-size: 18px;
    font-family: "lato", sans-serif;
    margin-bottom: 23px;
  }
  .thumb {
    display: flex;
  }
  .thumb > img {
    margin-inline: 5px;
    width: 125px;
    height: 120px;
    margin-bottom: 30px;
    border-radius: 10px;
  }
  .addcartbtn {
    background-color: black;
    border-radius: 6px;
    font-size: 20px;
    color: white;
    font-family: "poppins", sans-serif;
    padding-inline: 20px;
    padding-block: 10px;
  }
`;

const Detail = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = Data.Products.find((item) => item.id === productId);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = () => {
    dispatch(add(product));
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Main>
      <Backg />
      <div className="main1">
        {loading ? (
          <ScaleLoader color="#151514" loading={loading} size={100} />
        ) : (
          <>
            <div className="bigimg">
              <img src={product.src[0]} alt={product.name} />
            </div>
            <div className="detailbox">
              <div className="title">{product.name}</div>
              <h4>Description:</h4>
              <div className="description">{product.description}</div>
              <div className="thumb">
                {product.src.map((img, index) => (
                  <img src={img} key={index} />
                ))}
              </div>
              <button className='addcartbtn' onClick={addToCart}>Add to cart</button>
            </div>
          </>
        )}
      </div>
    </Main>
  );
};

export default Detail;
