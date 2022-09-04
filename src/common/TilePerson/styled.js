import styled from "styled-components"

export const StyledTilePerson = styled.section`

    position: relative;
    width: 208px;
    height: 339px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 12px 0px 12px 0px;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 136px;
        height: 245px;
    }
`;
export const PersonSection = styled.div`
    display: grid;
    grid-template-rows: auto auto;

`;
export const Poster = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    width: 177px;
    height: 264px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 120px;
        height: 178px;
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
    width: 177px;
    height: 231px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        margin: 8px;
        width: 120px;
        height: 178px;
        left: calc(50% - 114px/2 - 71px);
        top: 0px;
    }
`;
export const StyledPersonIcon = styled.div`
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
export const PersonName = styled.div`

    font-weight: ${({ theme }) => theme.fontSize.medium};
    font-size: 22px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    line-height: 130%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 16px;
    }
`;
export const Destription = styled.section`

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

`;