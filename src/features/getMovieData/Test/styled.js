import styled from "styled-components";

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  min-width: 200px;
  width: 100%;
  margin-bottom: 50px;
  background-color: rgb(255 255 255 / 80%);
  color: rgb(24, 24, 24);
  box-shadow: 0.5px 0px 8px;
`;

export const Button = styled.button`
  -webkit-tap-highlight-color: transparent;
  font-size: 15px;
  background-color: transparent;
  border: none;
  margin-left: 22px;
  margin-right: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bolder;
  transition: all 0.01s ease-in-out;
  &:visited {
    color: black;
  }
  &:hover {
    color: rgb(97, 97, 97);
    cursor: pointer;
  }
  &:active {
    color: rgb(97, 97, 97);
    transform: scale(0.8);
    background-color: none;
  }
`;
