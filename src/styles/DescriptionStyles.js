import styled from "styled-components";

export const DescriptionContainer = styled.div`
  padding: 20px 5%;
  text-align: center;
  background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/c73de083574a43772a747a953ee17bbd89341f23/src/assets/img/bg-curvy-desktop.svg);
  background-repeat: no-repeat;
  background-position: bottom;
  img {
    width: 50%;
  }
  @media (max-width: 768px) {
    background-image: url(https://raw.githubusercontent.com/CarlinGebyte/Reto-1-Sprint-3-AG/c73de083574a43772a747a953ee17bbd89341f23/src/assets/img/bg-curvy-mobile.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
    img {
      width: 90%;
    }
    @media (max-width: 450px) {
      background-position: center;
    }
  }
`;

export const DescriptionText = styled.div`
  width: 50%;
  margin: 0 auto;
  P {
    width: 70%;
    margin: 0 auto 4%;
  }
  @media (max-width: 768px) {
    width: 90%;
    P {
      width: 90%;
      margin: 0 auto 4%;
    }
  }
`;
