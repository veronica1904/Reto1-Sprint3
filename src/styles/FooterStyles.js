import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  padding: 130px 5% 2%;
  background-color: hsl(216, 53%, 9%);
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  align-items: center;
  margin-bottom: 2%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 2%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2%;
`;

export const DescriptionFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2%;
  img {
    width: 20px;
    height: auto;
    margin-right: 5%;
  }
`;

export const NumEmail = styled.div`
  justify-content: space-between;
  width: 150px;
  margin-bottom: 2%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    p {
      margin-left: 5%;
    }
  }
`;

export const Email = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5%;
`;

export const ListFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 2%;
      &:hover {
        color: #fff;
        font-weight: 700;
      }
    }
  }
`;

export const FooterSocial = styled.div`
  margin-bottom: 2%;
  width: 15%;
  text-align: right;
  @media (max-width: 768px) {
    width: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
    li {
      display: inline-block;
      margin-bottom: 2%;
      margin: 0 5%;
      .fa-facebook-f,
      .fa-twitter,
      .fa-instagram {
        margin-right: 5%;
        border-radius: 50%;
        border: 1px solid white;
        width: 14px;
        text-align: center;
        padding: 5px;
        &:hover {
          color: hsl(176, 68%, 64%);
          border-color: hsl(176, 68%, 64%);
        }
      }
    }
  }
  @media (max-width: 768px) {
    ul {
      display: flex;
      width: 90%;
      margin: auto;
    }
  }
`;
