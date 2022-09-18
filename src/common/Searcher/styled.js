import styled from "styled-components";
import SearchIcon from "../../iconComponents/SearchIcon.svg"

export const StyledSearchBox = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
`;

export const Input = styled.input`
    width: 100%;
    height: 48px;
    width: 432px;
    margin-right: 192px;
    border-radius: 33px;
    border: 1px solid grey;
    justify-self: end;
    text-indent: 60px;
    background-image: url(${SearchIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 25px center;
    ::placeholder{
        
        height:24px;
        left:64px;
        font-size: 16px;
        font-weight: 400;
        line-height: 150%;
        color: grey;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        align-items:center ;
        margin-right: 16px;
        height: 44px;
        width: 288px;
        grid-column: 1/3;
        text-indent: 40px;
        background-position: 17px center;
        background-size: 14px;
        font-size: 13px;
    }
`;
