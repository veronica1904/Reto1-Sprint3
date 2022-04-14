import styled from "styled-components";

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  margin-top: 50px;
  h1 {
    /* font-size: 2.5rem; */
    margin-bottom: 20px;
  }
  p {
    /* font-size: 1.5rem; */
    margin-bottom: 20px;
  }
  img {
    /* width: 50%; */
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  text-align: center;
  width: 33%;
  display: inline-block;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
