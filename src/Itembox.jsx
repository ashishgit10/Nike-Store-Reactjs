import React from "react";
import "../src/Styles/Item.css";
import { NavLink } from "react-router-dom";


export default function Itembox(props) {
    const { product } = props;
    /*     const linkto = `/detail/${product.id}`; */
    console.log(product)
    return (
        <NavLink className="navbar-link" to={'/detail'}>
            <div className="card1">
                <img src={product.image} className="img1" />
                <div className="productdata">
                    <h4>{product.name}</h4>
                    <span>{product.price}</span>
                </div>
            </div>
        </NavLink>

    )
}