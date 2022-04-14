import styled from "styled-components";

export const ProductiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 5%;
  text-align: center;
  margin: 8% 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin-right: 5%;
  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const TextContainer = styled.div`
  text-align: left;
  width: 50%;
  h1 {
    margin-bottom: 1.5rem;
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      width: 90%;
      margin-bottom: 1.5rem;
    }
  }
  p {
    margin-bottom: 1.5rem;
  }
  a {
    color: hsl(176, 68%, 64%);
    g {
      fill: #fff;
      filter: "url(#a)";
    }
    &:hover {
      color: #fff;
      fill: #fff;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
