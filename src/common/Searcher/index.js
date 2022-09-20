import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios"
import { Input } from "./styled"



const API_KEY = '9ca6b7689445c94b2e17d44de714a06b'

export const Searcher = () => {
    const [searchQuery, updateSearchQuery] = useState("");
    const [timeoutId, updateTimeoutId] = useState();
    const [updateMovieList] = useState([]);
    const pageType = useLocation().pathname.split("/")[1];



    const fetchData = async (searchString) => {
        const response = await axios.
            get(`https://api.themoviedb.org/3/search/movie?${searchString}&api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`
            );
        console.log(response)
        updateMovieList(response.data.results)
    };


    const onTextChange = (event) => {
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        updateTimeoutId(timeout)
    };

    return (
        <Input
            placeholder={`Search for ${pageType}...`}
            value={searchQuery || ""}
            onChange={onTextChange} />

    );
};






export default Searcher;