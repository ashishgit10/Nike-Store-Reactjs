import React from "react";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const Nav = styled.nav`
ul{
    display:flex;
    justify-content:center;
    align-items: center;
margin-inline:15px;
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

    `
const Navbar = () => {
    return (
        <Nav>
            <ul className='navbar-lists'>
                <li><NavLink className="navbar-link" to='/'>Home</NavLink></li>
                <li><NavLink className="navbar-link" to='/Shop'>Shop</NavLink></li>
            </ul>
        </Nav>
    )
}
export default Navbar;