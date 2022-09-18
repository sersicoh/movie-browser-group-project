import React from "react";
import loadingCircle from "../../iconComponents/loadingCircle.svg";
import { Image, LoadingContainer } from "./styled";

const Loading = () => (
    <LoadingContainer>
        <Image src={loadingCircle} />
    </LoadingContainer>
);

export default Loading;