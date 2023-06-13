import React from "react";
import styled from 'styled-components'
import Hero from './Components/Hero'
const Main = styled.main`
height:100vh;
background: linear-gradient(to bottom,#fcddff,#d6d6d6);
overflow:hidden;
`
const Home = () => {
    return (
        <Main>
            <Hero />
        </Main>
    )
}
export default Home;