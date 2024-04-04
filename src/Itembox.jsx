import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import "../src/Styles/Item.css";

const Itembox = ({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavLink className="navbar-link" to={`/detail/${product.id}`}>
      <div className="card1">
        <div className="img-wrapper">
          {loading ? (
            <ScaleLoader color="#151514" loading={loading} size={10} />
          ) : null}
          <img
            src={product.image}
            className="img1"
            data-aos="zoom-in"
            alt={product.name}
            onLoad={() => setLoading(false)} // Set loading to false when the image is loaded
          />
        </div>
        <div className="productdata">
          <h4>{product.name}</h4>
          <span>{product.price}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default Itembox;
