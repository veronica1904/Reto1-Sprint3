import styled from "styled-components";

export const Button = styled.button`
  background-color: hsl(198, 60%, 50%);
  border: 1px solid hsl(198, 60%, 50%);
  border-radius: 80px;
  color: #fff;
  padding: 10px 10%;
  margin: 10px;
  width: auto;
  font-size: 1.2em;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: hsl(176, 68%, 64%);
    border-color: hsl(176, 68%, 64%);
  }
`;
