import React from "react";
// import loadingCircle from "../../iconComponents/loadingCircle.svg";
import { Image, LoadingContainer } from "./styled";

function Loading () {

    return (
        <LoadingContainer>
            <Image src={`https://www.dolina-noteci.pl/data/include/cms/Blog-DN/nowonarodzone_koty.jpg`} />
        </LoadingContainer>
    )
};

export default Loading;