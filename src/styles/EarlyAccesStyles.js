import styled from "styled-components";

export const EarlyContainer = styled.div`
  position: relative;
  top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  padding: 2% 5%;
  background-color: hsl(217, 28%, 15%);
  margin: 5% auto;
  z-index: 1;
  border-radius: 10px;
  @media (max-width: 1100px) {
    top: 100px;
  }
  @media (max-width: 732px) {
    width: 80%;
  }

  form {
    width: 100%;
    input {
      border-radius: 50px;
      border: 1px solid transparent !important;
      padding: 0 3%;
      height: 40px;
      margin-right: 2%;
      width: 50%;
    }

    button {
      height: 40px;
      padding: 0 2%;
    }
    @media (max-width: 830px) {
      input {
        width: 90%;
        margin: auto;
      }
      button {
        width: 95%;
        margin: 10px auto 0;
      }
    }
  }
`;
