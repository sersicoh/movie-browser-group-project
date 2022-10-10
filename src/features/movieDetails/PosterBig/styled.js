import styled from "styled-components";

export const BackgroundColor = styled.section`
  position: relative;
  z-index: -2;
  width: 100%;
  background-color: black;
  overflow: auto;
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  position: relative;
  text-align: center;
  color: white;
  max-width: 1368px;
  min-width: 319px;
  background: linear-gradient(
      270deg,
      #000000 0.01%,
      rgba(0, 0, 0, 0.873268) 2.5%,
      rgba(0, 0, 0, 0.159921) 12.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 0.01%,
      rgba(0, 0, 0, 0.873268) 2.5%,
      rgba(0, 0, 0, 0.159921) 12.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
          189.44deg,
       rgba(0, 0, 0, 0) 58.48%,
       rgba(0, 0, 0, 0.106473) 63.17%,
       rgba(0, 0, 0, 0.235359) 68.85%,
       rgba(0, 0, 0, 0.492821) 78.08%,
       rgba(0, 0, 0, 0.740286) 85.86%,
       #000000 92.87%
    );
`;
export const BackgroundImage = styled.img`
  width: 100%;
  position: relative;
  z-index: -1;

`;
export const InfoSection = styled.div`
  margin-left: 16px;
  position: absolute;
  bottom: 1px;
  display: grid;
  grid-template-rows: 1fr;
  margin-bottom: 26px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 10px;
  }
`;
export const MovieTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.bold};
  line-height: 130%;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 42px;
    margin: 0 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
  }
`;
export const RatingSection = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 25px;
  grid-gap: 10px;
  justify-content: flex-start;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    gap: 10px;
    margin-top: 8px;
   
  }

`;
export const StyledRow = styled.section`
  display: flex; 
  justify-content: flex-start;
  align-items: flex-end;
  gap: 5px;
`;
export const StyledStarIcon = styled.div`
  width: 50px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    width: 25px;
    height: 25px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 18px;
    height: 18px;
  }
`;
export const Rate = styled.div`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontSize.medium};
  line-height: 90%;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
  }
`;
export const RateScale = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;
export const Votes = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  margin-left: 8px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
    margin-left: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
  }
`;