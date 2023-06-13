import React from "react";
import styled from 'styled-components'

const Bg = styled.main`
.circle{
  position: absolute;
    width: 900px;
    height: 500px;
    top: -98px;
    left: -80px;
    background: #fffab3;
    filter: blur(56px);
    z-index: 0;
    border-radius: 50%;
  }
  .circle1{
    position: absolute;
    width:600px;
    height:500px;
    top: -40px;
    right: 410px;
    background:#fcddff;
    filter: blur(56px);
    z-index: 0;
  }
  .circle2{
    position: absolute;
    width:600px;
    height:500px;
    top: -40px;
    right: 0px;
    background:#fcddff;
    filter: blur(56px);
    z-index: 0;
  }
`
const Backg = () => {
  return (
    <Bg>
      <div className="circle"></div>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </Bg>
  )
}
export default Backg;