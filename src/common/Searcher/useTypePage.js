import { useLocation } from "react-router";
import { searchTypePage } from "./searchQueryParamName";

export const useTypePage = () => {

    const location = useLocation();

    let pageType = location.pathname.split("/")[1];

    switch (pageType) {
        case "search":
            pageType = new URLSearchParams(location.search).get(searchTypePage);
            break;
        case "movies":
        case "movieDetails":
            pageType = "movie";
            break;
        case "people":
        case "personDetails":
            pageType = "person";
            break;
        default:
            pageType = "movie";
    }

    return pageType;

};