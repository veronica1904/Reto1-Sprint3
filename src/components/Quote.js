import React from "react";
import {
  Card,
  CardsContainer,
  ImageContainer,
  TestimonialP,
} from "../styles/QuoteStyles";

function Quote() {
  return (
    <CardsContainer>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <TestimonialP>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961135/sprint3-reto1/profile-1_ovq97d.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>

        <TestimonialP>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961137/sprint3-reto1/profile-2_mko4lx.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
      <Card>
        <p>
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <TestimonialP>
          <ImageContainer>
            <img
              src="https://res.cloudinary.com/veronicaduque/image/upload/v1649961137/sprint3-reto1/profile-3_ihwmuw.jpg"
              alt="Satish"
            ></img>
          </ImageContainer>
          <div>
            <h4>Satish Patel</h4>
            <p>Founder & CEO, Huddle</p>
          </div>
        </TestimonialP>
      </Card>
    </CardsContainer>
  );
}

export default Quote;
