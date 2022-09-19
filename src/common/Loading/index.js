import React from "react";
import LoadingCircle from "../../iconComponents/LoadingCircle";
import { LoadingContainer, StyledLoadingCricle } from "./styled";

function Loading() {

    return (
        <LoadingContainer>
            <StyledLoadingCricle>
                <LoadingCircle />
            </StyledLoadingCricle>
        </LoadingContainer>
    )
};

export default Loading;