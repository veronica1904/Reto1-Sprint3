import React from "react";
import { HeaderContainer } from "../styles/StyledHeader";

function Header() {
  return (
    <HeaderContainer>
      <div style={{width:"20%"}}>
        <img width={"100%"}
          src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961138/sprint3-reto1/logo_sejudr.svg"
          alt="logo"
        ></img>
      </div>
      <div id="navbar">
        <ul>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#?">Sign In</a>
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
}

export default Header;
