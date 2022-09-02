import styled from "styled-components";

export const TilesMovieSection = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        flex-direction: column;
        gap: 16px;
    }
`;