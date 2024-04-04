import "../Styles/Homemediaqueries.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footmain = styled.div`
  background-color: #d6d6d6;
  z-index: 999;
  position: relative;
  top:100%;
  .padding {
    padding: 30px;
  }
  .footer {
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    display: flex;
  }
  h5 {
    font-size: 15px;
    text-transform: uppercase;
    margin-inline: 8px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .footerbg {
    background-color: #d6d6d6;
  }
  .tag {
    font-weight: bold;
  }
  em {
    font-size: 20px;
  }
`;

const Footer = () => {
  return (
    <Footmain>
      <div className="padding">
        <div className="footer">
          <div className="links">
            <NavLink to="https://www.linkedin.com/in/ashish-kumar-sharma-2922b415a/">
              {" "}
              <h5>Linkedin</h5>
            </NavLink>
            <NavLink to="https://www.instagram.com/ashish.sharma_10/">
              {" "}
              <h5>Instagram</h5>
            </NavLink>
            <NavLink to="https://github.com/ashishgit10" target="_blank">
              {" "}
              <h5>Github</h5>
            </NavLink>
          </div>
          <div className="tag">
            © 2023 <em>Ashish</em>
          </div>
        </div>
      </div>
    </Footmain>
  );
};
export default Footer;
