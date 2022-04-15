import React from "react";
import {
  Description,
  DescriptionFooter,
  Email,
  FooterContainer,
  FooterSocial,
  ListFooter,
  Logo,
  LogoContainer,
  NumEmail,
} from "../styles/FooterStyles";

function Footer() {
  return (
    <FooterContainer>
      <Description>
        <LogoContainer>
          <Logo
            src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961138/sprint3-reto1/logo_sejudr.svg"
            alt="logo"
          ></Logo>
        </LogoContainer>
        <DescriptionFooter>
          <img
            src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961137/sprint3-reto1/icon-location_wyrnuu.svg"
            alt="Location"
          ></img>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </DescriptionFooter>
      </Description>
      <NumEmail>
        <div>
          <span>
            <Email
              src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961137/sprint3-reto1/icon-phone_jk5bj0.svg"
              alt="Teléfono"
            ></Email>
          </span>
          <p>+1-543-123-4567</p>
        </div>
        <div>
          <span>
            <Email
              src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961135/sprint3-reto1/icon-email_ekfdsp.svg"
              alt="Mail"
            ></Email>
          </span>
          <p>example@filo.com</p>
        </div>
      </NumEmail>
      <ListFooter>
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </ListFooter>
      <ListFooter>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </ListFooter>
      <FooterSocial>
        <ul>
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
          <li>
            <i className="fab fa-twitter"></i>
          </li>
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </ul>
      </FooterSocial>
    </FooterContainer>
  );
}

export default Footer;
