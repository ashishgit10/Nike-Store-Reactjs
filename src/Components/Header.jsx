import React from "react";
import Navbar from './Navbar'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import '../Styles/Shopmediaqueries.css'
const Head = styled.header`
.head{
    display:flex;
justify-content: space-between;
align-items: center;
width:80%;
margin: auto;
background-color:transparent;
position: relative;
z-index: 1;
height:80px;
}

.logo{
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-style: italic;
    margin-inline:20px;
    font-size: 30px;
    text-decoration: none;
    color:black;
}
`
const Header = () => {
    return (
        <Head>
            <div className="head">
                <NavLink to="/" className="logo">
                    <span className="logo">Run</span>
                </NavLink>
                <Navbar />
            </div>
        </Head>

    )
}
export default Header;