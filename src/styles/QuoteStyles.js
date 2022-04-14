import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 5%;
  background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/main/src/assets/img/bg-quotes.png);
  background-repeat: no-repeat;
  background-position: 3% 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    background-position: 3% 0;
  }
`;

export const Card = styled.div`
  width: 25%;
  margin: 0 auto;
  padding: 3%;

  display: flex;
  flex-direction: column;

  background-color: hsl(219, 30%, 18%);
  border-radius: 5px;

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 4%;
  }
`;

export const TestimonialP = styled.div`
  display: flex;
  margin: 5% 0 0 0;
  h4 {
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  img {
    border-radius: 50%;
    width: 100%;
  }
`;
