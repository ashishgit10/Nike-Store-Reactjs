import React from "react";
import "../src/Styles/Item.css";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import ScaleLoader
from "react-spinners/ScaleLoader";

export default function Itembox(props) {
  const { product } = props;
  const linkto = `/detail/${product.id}`;

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <NavLink className="navbar-link" to={linkto}>
      <div className="card1">
        {loading ? (
          <ScaleLoader
 color={"#151514"} loading={loading} size={10} />
        ) : (
          <>
            <img src={product.image} className="img1" data-aos="zoom-in" />
            <div className="productdata">
              <h4>{product.name}</h4>
              <span>{product.price}</span>
            </div>
          </>
        )}
      </div>
    </NavLink>
  );
}
