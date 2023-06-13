import React from "react";
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
const Nav = styled.nav`
ul{
    display:flex;
    justify-content:center;
    align-items: center;
margin-inline:15px
}
li{
    padding-inline:15px;
list-style: none;
    a{
        text-decoration: none;
        font-size: 18px;
    }
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