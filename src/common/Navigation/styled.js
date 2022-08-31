import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationBackground = styled.div`
background-color: black;
padding: 23px;
`;

export const NavigationList = styled.ul`    
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto 1fr;
    grid-gap: 32px;
    list-style-type: none;
    max-width: ${({ theme }) => theme.breakpoint.maxContentSize}px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: 1fr auto auto;
        row-gap: 20px;
    }
`;

export const NavigationLink = styled(NavLink)`

    background-color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    line-height: 21px;
    font-weight: ${({ theme }) => theme.fontSize.bold};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 8px 24px;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.black};

    &.active{
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 24px;
    };
`;

export const NavigationLogo = styled.div`
    font-weight: ${({ theme }) => theme.fontSize.medium};
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
`;

export const NavigationSearcher = styled.div`
    font-weight: 500;
    font-size: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        display: flex;
        justify-content: center;
        grid-column-start: 1;
        grid-column-end: 4;
    }

`;