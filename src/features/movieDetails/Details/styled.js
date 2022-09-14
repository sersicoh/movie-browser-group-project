import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  margin-bottom: 34px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTileMovie = styled.section`
  display: grid;
  /* grid-template-rows: repeat(8, min-content) 1fr; */
  grid-template-columns: 1fr 3fr;
  column-gap: 40px;
  grid-template-areas: "poster rest";
  padding: 40px;
  /* @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        grid-template-columns: 1fr 2fr;
        column-gap: 16px;
        grid-template-areas:
            "poster title"
            "poster year"
            "poster production"
            "poster release"
            "poster tags"
            "poster whiteSpace"
            "poster rating"
            "poster description"
            ;
    } */
  /* @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr 1fr;
        column-gap: 16px;
        min-width: 250px;
        grid-template-areas:
            "poster title"
            "poster year"
            "poster tags"
            "poster rating"
            "poster whiteSpace"
            ;
    } */
`;
export const Poster = styled.img`
  grid-area: poster;
  width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
  grid-area: poster;
  margin: 16px;
  background: ${({ theme }) => theme.colors.silver};
  width: 292px;
  height: 434px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
    left: calc(50% - 114px / 2 - 71px);
    top: 0px;
  }
`;
export const StyledMovieIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  margin-right: 9px;
  margin-bottom: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 40px;
    margin-bottom: 2px;
    margin-right: 9px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 20px;
    height: 48px;
  }
`;
export const MovieTitle = styled.div`
  grid-area: title;
  font-weight: ${({ theme }) => theme.fontSize.bold};
  line-height: 130%;
  font-size: 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    /* margin: 0 0 4px; */
  }
`;
export const MovieYear = styled.div`
  grid-area: year;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Tags = styled.section`
  display: flex;
  grid-area: tags;
  padding: 0;
  margin: 8px 0 0;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    gap: 8px;
    align-items: flex-start;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    gap: 8px;
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
  margin-top: -16px;
  align-items: flex-end;
  align-content: flex-end;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    align-content: flex-start;
    gap: 8px;
    flex: 0;
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
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.regular};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Description = styled.div`
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.black};
`;
export const ProductionSection = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
`;
export const ReleaseDateSection = styled.div`
  display: flex;
  margin-top: -18px;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
`;
export const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin-right: 8px;
`;
export const InfoSection = styled.div`
  grid-area: rest;
  margin-top: 10px;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 24px;
  flex-direction: column;
`;
export const RateScale = styled.div`
  margin-left: -5px;
  margin-bottom: 3px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontSize.medium};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
