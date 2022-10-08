import { useLocation, useNavigate } from "react-router-dom";
import { searchPageNumber, searchQueryParamName, searchTypePage } from "./searchQueryParamName";
import { Input } from "./styled"
import useQueryParameter from "./useQueryParameter";
import { useTypePage } from "./useTypePage";

export const Searcher = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const pageType = useTypePage();
    const searchQuery = useQueryParameter(searchQueryParamName);

    const onTextChange = ({ target }) => {

        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchTypePage);
            searchParams.delete(searchQueryParamName);
            searchParams.delete(searchPageNumber);
            navigate({
                pathname: "/movies",
            });
        } else {
            searchParams.set(searchTypePage, pageType);
            searchParams.set(searchQueryParamName, target.value);
            searchParams.set(searchPageNumber, "1");
            navigate({
                pathname: "/search",
                search: `?${searchParams.toString()}`,
            });
        }
    };

    return (
        <Input
            placeholder={`Search for ${pageType}...`}
            value={searchQuery || ""}
            onChange={onTextChange} />
    );
};

export default Searcher;