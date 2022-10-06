import { useLocation, useNavigate } from "react-router-dom";
import { Input } from "./styled"

export const Searcher = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const pageType = "movie";

    const searchQuery = new URLSearchParams(location.search).get("query");

    const onTextChange = ({ target }) => {

        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete("type");
            searchParams.delete("query");
            searchParams.delete("page");
            navigate(`/movies/1`);

        } else {
            searchParams.set("type", pageType);
            searchParams.set("query", target.value);
            searchParams.set("page", "1");
            navigate(`/search?${searchParams.toString()}`);
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