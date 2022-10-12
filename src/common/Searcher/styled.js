import styled from "styled-components";
import SearchIcon from "../../iconComponents/SearchIcon.svg";

export const Input = styled.input`
  height: 48px;
  width: 432px;
  border-radius: 33px;
  border: 1px solid black;
  text-indent: 53px;
  background-image: url(${SearchIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 20px center;

  ::placeholder {
    height: 24px;
    left: 64px;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: grey;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 44px;
    width: 288px;
    text-indent: 40px;
    background-position: 17px center;
    background-size: 14px;
    font-size: 13px;

    ::placeholder {
      font-size: 14px;
    }
  }
`;
