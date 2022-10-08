import moment from "moment/moment";
import Content from "../../common/Content";
import Pagination from "../../common/Pagination";
import { searchPageNumber, searchTypePage } from "../../common/Searcher/searchQueryParamName";
import useQueryParameter from "../../common/Searcher/useQueryParameter";
import { useTypePage } from "../../common/Searcher/useTypePage";
import TileMovie from "../../common/TileMovie";
import TilePerson from "../../common/TilePerson";
import { TilesPersonSection, TilesSection } from "../../common/TilesSection/styled";

const SearchContentSelector = ({ query, searchList }) => {

    const pageType = useTypePage();

    const page = useQueryParameter(searchPageNumber);
    const type = useQueryParameter(searchTypePage);
    let returned = "";

    switch (pageType) {
        case "movie":
            returned = (
                <Content
                    title={`Search results for "${query}" (${searchList.total_results})`}
                    body={
                        <TilesSection>
                            {searchList.searchList.map((movie) => (
                                <TileMovie
                                    key={movie.id}
                                    movie={movie}
                                    genreIds={movie.genre_ids}
                                    releaseDate={moment(movie.release_date).format("YYYY")}
                                />
                            ))}
                        </TilesSection>
                    }
                    pagination={
                        <Pagination
                            param={"search"}
                            page={parseInt(page)}
                            searchQuery={`?type=${type}&query=${query}&page=`}
                            totalPages={searchList.total_pages}
                        />
                    }
                />
            );
            break;
        case "person":
            returned = (
                <Content
                    title={`Search results for "${query}" (${searchList.total_results})`}
                    body={
                        <TilesPersonSection>
                            {searchList.searchList.map((person) => (
                                <TilePerson
                                    key={person.id}
                                    person={person}
                                />
                            ))}
                        </TilesPersonSection>
                    }
                    pagination={
                        <Pagination
                            param={"search"}
                            page={parseInt(page)}
                            searchQuery={`?type=${type}&query=${query}&page=`}
                            totalPages={searchList.total_pages}
                        />
                    }
                />
            );
            break;
    };

    return returned;
}

export default SearchContentSelector;