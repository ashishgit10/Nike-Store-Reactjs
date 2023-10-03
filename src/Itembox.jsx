import React, { useEffect } from "react";
import "../src/Styles/Item.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Itembox(props) {
  const { product } = props;
  const linkto = `/detail/${product.id}`;
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <NavLink className="navbar-link" to={linkto}>
      <div className="card1">
        <img src={product.image} className="img1" data-aos="zoom-in" />
        <div className="productdata">
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </div>
      </div>
    </NavLink>
  );
}
