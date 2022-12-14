import styled from "styled-components";

export const Wrapper = styled.section`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  margin: auto 16px;
  padding: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTileMovie = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 40px;
  row-gap: 24px;
  grid-template-areas:
    "poster rest"
    "poster description";
    
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 2fr;
    column-gap: 24px;
    padding: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    row-gap: 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    grid-template-areas:
      "poster rest"
      "description description";
  }
`;
export const Poster = styled.img`
  grid-area: poster;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
  grid-area: poster;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.silver};
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: 2/3;
  border-radius: 5px;
`;
export const StyledMovieIcon = styled.div`
  width: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 60px;
  }
`;
export const MovieTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontSize.bold};
  line-height: 130%;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
  }
`;
export const MovieYear = styled.div`
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Tags = styled.section`
  display: flex;
  padding: 0;
  margin: 8px 0 0;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    margin-bottom: 15px;
    gap: 8px;
    align-items: flex-start;
  }
`;
export const Tag = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  padding: 8px 16px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;
export const RatingSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-content: flex-start;
    gap: 6px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    margin-top: -6px;
  }
`;
export const StyledStarIcon = styled.div`
  width: 30px;
  height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    width: 16px;
    height: 15px;
  }
`;
export const Rate = styled.div`
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontSize.bold};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Votes = styled.div`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  margin-bottom: 2px;
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 12px;
    margin-bottom: 1px;
  }
`;
export const Description = styled.div`
  grid-area: description;
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
    line-height: 160%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    line-height: 160%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    line-height: 160%;
  }
`;
export const ProductionSection = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 2px;
  }
`;
export const ReleaseDateSection = styled.div`
  display: flex;
  margin-top: -18px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
    margin-top: -8px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 2px;
  }
`;
export const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const InfoSection = styled.div`
  grid-area: rest;
  margin-top: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 22px;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    gap: 10px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 3px;
    margin-top: 0px;
  }

`;
export const RateScale = styled.div`
  margin-left: -5px;
  margin-bottom: 2px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontSize.medium};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
    margin-bottom: 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;
export const Comma = styled.div`
:not(:last-child)::after { content: ',??' }
`;
