import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Wrapper = styled.section`
    display: flex;
    background: ${({ theme }) => theme.colors.white};
    padding: 16px;
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        padding: 14px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        padding: 12px;
    }
`;
export const StyledTilePerson = styled.section`

    display: grid;
        grid-template-rows: repeat(4, min-content) 1fr;
        grid-template-areas: 
            "poster"
            "description"
            ;
`;
export const Poster = styled.img`
    grid-area: poster;
    width: 100%;
    border-radius: 5px;
    aspect-ratio: 2/3;

`;
export const NoPoster = styled.div`
    grid-area: poster;
    background: ${({ theme }) => theme.colors.silver};
    border-radius: 5px;
`;
export const StyledPersonIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        width: 60px;
        height: 60px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 48px;
        height: 48px;
    }
`;
export const Destription = styled.section`
    grid-area: description;

    margin: 16px 0 8px;
    line-height: 130%;

`;
export const PersonName = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.medium};
    font-size: 22px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px){
        font-size: 20px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;
