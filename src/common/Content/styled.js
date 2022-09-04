import styled from "styled-components";

export const ContentTitle = styled.h1`

    display: flex;
    align-items: center;
    font-size: 36px;
    font-weight: ${({theme}) => theme.fontSize.bold};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 22px; 
    }
`;

export const SectionArea = styled.div`
    
    max-width: 1368px;
    margin: 0 auto;
    padding: 12px;
`;