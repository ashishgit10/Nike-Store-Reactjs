/* import React from "react";
import Backg from "./Components/Backg";
import { styled } from "styled-components";
import Itembox from "./Itembox";
import "./Styles/Shopmediaqueries.css";

const Wrapper = styled.section`
  .bg1 {
    background: linear-gradient(to bottom, #fcddff, #d6d6d6);
    height: 100vh;
  }
  .shopbody {
    height: 100vh;
    position: relative;
    z-index: 999;
  }
  .medium {
    max-width: 1200px;
    margin: auto;
  }

  .img1 {
    width: 100%;
    border-radius: 8px;
  }
`;

const Product = (props) => {
  const { Products } = props;

  return (
    <Wrapper>
      <div className="bg1">
        <Backg />
        <div className="shopbody">
          <div className="medium">
            <div className="card-box">
              {Products.map((product) => (
                <Itembox key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
 */

// Shop.js
import React from 'react';
import Backg from './Components/Backg';
import Itembox from './Itembox';
import Data from './Data';
import styled from 'styled-components';

const Wrapper = styled.section`
  .bg1 {
    background: linear-gradient(to bottom, #fcddff, #d6d6d6);
  }
  .shopbody {
    position: relative;
    z-index: 999;
  }
  .medium {
    max-width: 1200px;
    margin: auto;
  }
  .img1 {
    width: 100%;
    border-radius: 8px;
  }
`;

const Shop = () => {
  const { Products } = Data;

  return (
    <Wrapper>
      <div className="bg1">
        <Backg />
        <div className="shopbody">
          <div className="medium">
            <div className="card-box">
              {Products.map((product) => (
                <Itembox key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Shop;
