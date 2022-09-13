import styled from "styled-components";
import PosterBig from "../../../iconComponents/PosterBig.png";

export const BackgroundColor = styled.section`
  margin-bottom: 64px;
  width: 100%;
  height: 770px;
  background-color: black;
`;
export const BackgroundImage = styled.div`
  background-image: url(${PosterBig});
  width: 1368px;
  height: 770px;
  margin: 0 auto;
`;
export const InfoSection = styled.div`
  margin-bottom: 56px;
`;
export const Wrapper = styled.div`
  width: 1368px;
  height: 770px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 1368px;
  height: 770px;

  background: 
    linear-gradient(
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
export const Poster = styled.img``;
export const NoPoster = styled.div``;
export const StyledMovieIcon = styled.div``;
export const MovieTitle = styled.div`
  margin: 16px 0 8px;
  font-weight: ${({ theme }) => theme.fontSize.bold};
  line-height: 130%;
  font-size: 64px;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    margin: 0 0 4px;
  }
`;
export const MovieYear = styled.div``;
export const Tags = styled.section``;
export const Tag = styled.div``;
export const RatingSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;
export const StyledStarIcon = styled.div`
  width: 50px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    width: 16px;
    height: 15px;
  }
`;
export const Rate = styled.div`
  font-size: 30px;
  font-weight: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3px;
  margin-left: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const RateScale = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
  margin-left: 7px;
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Votes = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.white};
  margin-left: 5px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
