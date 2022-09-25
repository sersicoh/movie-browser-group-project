import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledPaginationSection = styled.section`

margin: 30px 0;
display: flex;
justify-content: center;
align-items: center;
gap: 8px;

`;
export const PaginationTiles = styled(Link)`

    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: ${({ theme }) => theme.colors.pattensBlue};
    border-radius: 5px;
    margin: 0 2px;
    text-decoration: none;

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: ${({ theme }) => theme.colors.mystic};
            cursor: no-drop;
        `
    }
`;
export const StyledArrow = styled.span`
    fill: black;
`;
export const StyledText = styled.span`

    color: ${({ theme }) => theme.colors.black};
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontSize.regular};
    
`;
export const PageInfo = styled.span`

    color: ${({ theme }) => theme.colors.darkerGrey};

`;
export const PageNumber = styled.span`

    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontSize.bold};

`;