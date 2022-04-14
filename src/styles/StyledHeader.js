import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  padding: 20px 5%;
  align-items: center;
  justify-content: space-between;
  #navbar {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: right;
  }
  ul {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: right;
    list-style: none;
    font-size: 14px;
    font-weight: bold;
    margin: 0 0 0 10%;
    li {
      margin: 0 10px;
    }
    a {
      color: #ccc;
      text-decoration: none;
      transition: all 0.3s ease-in-out;
      &:last-child {
        padding-right: 0;
      }
      &:hover {
        color: #fff;
      }
    }
    @media (max-width: 768px) {
      ul {
        width: 100% !important;
      }
    }
  }
`;
