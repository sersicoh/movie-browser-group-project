import React from "react";
import { NoResultContainer, StyledPaperPlane, StyledClouds, StyledNoResult, StyledH1} from "./styled";

function NoResult({title, error404}) {

    return (
        <>
        <StyledH1>{title}</StyledH1> 
        <NoResultContainer>
                <StyledClouds/> 
                 <StyledH1>{error404}</StyledH1>
                <StyledPaperPlane/>
                <StyledNoResult/>
        </NoResultContainer>
        </>
    )
};

export default NoResult;