import styled from "styled-components";
import Clouds from "../../iconComponents/Clouds";
import PaperPlane from "../../iconComponents/PaperPlane";
import NoResult from "../../iconComponents/NoResult";

export const NoResultContainer = styled.div`
  margin: 195px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 auto;
  }
`;
export const StyledPaperPlane = styled(PaperPlane)`
  margin-top: 30px;
  margin-right: 80px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const StyledClouds = styled(Clouds)`
  fill: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const StyledNoResult = styled(NoResult)`
  min-width: 315px;
  width: 80%;
  height: 80%;
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const StyledH1 = styled.span`
    margin-top: 20px;
    font-size: 22px; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({theme}) => theme.fontSize.bold};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px; 
    }
`;
