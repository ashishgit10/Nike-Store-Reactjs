import React from "react";
import Backg from "./Backg";
import styled from "styled-components";
import Data from "../Data";
import { useParams } from "react-router-dom"; // Import useParams
import "../Styles/Detailmediaqueries.css";
import { useState, useEffect } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
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
    height: 100vh;
    position: relative;
    z-index: 999;
    height: 100vh;
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
    margin: 0px 20px 20px 20px;
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
  .rate {
    display: flex;
    align-items: center;
    margin-bottom: 23px;
  }
  .size {
    display: flex;
    align-items: center;
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
  const { Products } = Data;
  const { productId } = useParams(); // Get the productId from route params

  const product = Products.find((item) => item.id === productId); // Find the product with the matching ID

  if (!product) {
    return <div>Product not found</div>; // Handle if the product is not found
  }
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Main>
      <Backg />
      <div className="main1">
        {loading ? (
          <ScaleLoader color={"#151514"} loading={loading} size={100} />
        ) : (
          <div className="main2" key={product.id}>
            <div className="bigimg">
              <img src={product.src[0]} />
            </div>

            <div className="detailbox">
              <div className="title">{product.name}</div>
              <h4>Description:</h4>
              <div className="description">{product.description}</div>
              <div className="rate">
                <h5>Rating :</h5>&nbsp;*****(50)
              </div>
              <div className="size">
                <h5>Size :</h5>
                <div className="radio">
                  <input type="radio" />
                  <input type="radio" />
                </div>
              </div>
              <div className="thumb">
                {product.src.map((img, index) => (
                  <img src={img} key={index} onClick={() => handletab(index)} />
                ))}
              </div>
              <button className="addcartbtn">Add To Cart</button>
            </div>
          </div>
        )}
      </div>
    </Main>
  );
};

export default Detail;
