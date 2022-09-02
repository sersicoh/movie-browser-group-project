import styled from "styled-components";

export const StyledTileMovie = styled.section`

    position: relative;
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
export const MovieSection = styled.div`
    display: grid;
    grid-template-rows: auto auto;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        grid-template-columns: auto 1fr;
    }
`;
export const Poster = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
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
export const NoPoster = styled.div`
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
export const Destription = styled.section`

    margin: 0px 0px 0px 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 16px 0px 0px 0px;
    }
`;
export const MovieTitle = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.medium};
    font-size: 22px;
    display: flex;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;
export const MovieYear = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.darkerGrey};
    font-size: 22px;
    display: flex;
    align-items: center;
    padding: 8px 0px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 13px;
    }
`;
export const Tags = styled.section`
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
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

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 10px;
        padding: 4px 8px;
    }
`;
export const RatingSection = styled.section`

    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: absolute;
    bottom: 16px;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        position: relative;
        bottom: -12px;
        gap: 8px;
    }
`;
export const StyledStarIcon = styled.div`
    width: 24px;
    height: 23px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 16px;
        height: 15px;
    }
`;
export const Rate = styled.div`
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontSize.bold};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 13px;
    }
    
`;
export const Votes = styled.div`
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontSize.regular};
    color: ${({ theme }) => theme.colors.darkerGrey};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 13px;
    }
`;