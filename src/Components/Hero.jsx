import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nikelogo from "../assets/nikeTX.png";
import Backg from "./Backg";
import { Button } from "../Styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Homemediaqueries.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Wrapper = styled.section`
  .section {
    max-width: 1200px;
    min-height: 100vh;
    margin: auto;
  }
  .herobox {
    position: relative;
  }
  .hero {
    display: flex;
    justify-content: center;
  }
  span {
    font-size: 435px;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    color: white;
    text-shadow: -10px 10px 10px rgba(0, 0, 0, 0.13);
    z-index: 1;
  }
  .logobox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 35%;
    left: 4%;
  }
  .logo {
    width: 62%;
    margin-bottom: 15px;
    z-index: 5;
  }
  .datablock {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    z-index: 5;
  }
  /*   .datablock > p{
    font-size:25px;
  } */
`;

const Hero = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 500 });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Wrapper>
      <Backg />
      <div className="section">
        <div className="herobox">
          <div className="hero">
            <span>NIKE</span>
          </div>
          <div className="logobox">
                <img
                  src={Nikelogo}
                  alt="logo"
                  className="logo"
                  data-aos="zoom-in"
                />
            <div className="datablock">
              <p>
                Explore the new collections designed with<br></br>
                comfort and style in mind
              </p>
              <Button>
                <NavLink to="/shop">Shop Now</NavLink>
                <FontAwesomeIcon icon="fa-solid fa-link" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};
export default Hero;
