import React from "react";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import cart from "../assets/cart.png"
import { useSelector } from 'react-redux'
const Nav = styled.nav`
ul{
    display:flex;
    justify-content:center;
    align-items: center;
}
li{
    padding-inline:15px;
list-style: none;  
position: relative;
}
a{
        text-decoration: none;
        font-size: 18px;
        color:black;
        font-family: 'poppins',sans-serif;
        text-transform: uppercase;
    }

ul li a::after{
    content:'';
    position: absolute;
    background-color: black;
width:30%;
height:2px;
left:16px;
top:100%;
border-radius:15px;
transition:all .1s linear;
}
ul li a:hover::after{
    width:60%;
}
.len{
    position: absolute;
    top:-20px;
    right:13px;
    background-color:black;
    color:white;
    padding:3px 8px;
    border-radius:50%;
    font-size:13px;
}
.img{
    width:22px;
}
    `
const Navbar = () => {
    const cartProducts=useSelector(state=>state.cart)
    return (
        <Nav>
            <ul className='navbar-lists'>
                <li><NavLink className="navbar-link" to='/'>Home</NavLink></li>
                <li><NavLink className="navbar-link" to='/Shop'>Shop</NavLink></li>
                
                <li className="position:relative">
                <div className="len">
                {cartProducts.length}
                </div>
                <NavLink className="" to="/cart"><img className="img" src={cart}/></NavLink>
                </li>
            </ul>
        </Nav>
    )
}
export default Navbar;