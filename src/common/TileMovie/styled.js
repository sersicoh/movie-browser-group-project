import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  a:link,
  a:visited,

  &:active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
export const Wrapper = styled.section`
  display: flex;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    scale: 105%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    padding: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 12px;
  }
`;
export const StyledTileMovie = styled.section`
  display: grid;
  grid-template-rows: repeat(4, min-content) 1fr;
  grid-template-areas:
    "poster"
    "title"
    "year"
    "tags"
    "whiteSpace"
    "rating";
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    
    grid-template-areas:
      "poster title"
      "poster year"
      "poster tags"
      "poster rating"
      "poster whiteSpace";
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
    grid-template-areas:
      "poster title"
      "poster year"
      "poster tags"
      "poster rating"
      "poster whiteSpace";
  }
`;
export const Poster = styled.img`
  grid-area: poster;
  max-width: 100%;
  border-radius: 5px;
  aspect-ratio: 2/3;
`;
export const NoPoster = styled.div`
  grid-area: poster;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.silver};
  aspect-ratio: 2/3;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;

`;
export const StyledMovieIcon = styled.div`
  width: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 50px;
  }
`;
export const MovieTitle = styled.div`
  grid-area: title;
  display: flex;
  margin: 16px 0 8px;
  font-weight: ${({ theme }) => theme.fontSize.medium};
  line-height: 130%;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 16px;
    margin: 0 0 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
  }
`;
export const MovieYear = styled.div`
  grid-area: year;
  line-height: 150%;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.darkerGrey};
  font-size: 16px;

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
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
  }
`;
export const RatingSection = styled.section`
  grid-area: rating;
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
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
  width: 24px;
  height: 23px;

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    width: 16px;
    height: 15px;
  }
`;
export const Rate = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.bold};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
export const Votes = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.darkerGrey};

  @media (max-width: ${({ theme }) => theme.breakpoint.between}px) {
    font-size: 13px;
  }
`;
