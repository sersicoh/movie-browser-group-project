import styled from "styled-components";

export const StyledTileMovie = styled.div`

    width: 324px;
    height: 650px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 12px 0px 12px 0px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 288px;
        height: 201px;
    }
`;

export const StyledPoster = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 114px;
        height: 169px;
        left: calc(50% - 114px/2 - 71px);
        top: 0px;
    }
`;

export const StyledNoPoster = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    background: ${({ theme }) => theme.colors.silver};
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 114px;
        height: 169px;
        left: calc(50% - 114px/2 - 71px);
        top: 0px;
    }
`;

export const StyledMovieIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 48px;
        height: 48px;

    }
`;

export const StyledDestription = styled.section`
    margin: 16px;
`;

export const StyledMovieTitle = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.medium};
    font-size: 22px;
    display: flex;
    align-items: center;
`;

export const StyledMovieYear = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 22px;
    display: flex;
    align-items: center;
`;