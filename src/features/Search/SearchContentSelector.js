import moment from "moment/moment";
import Content from "../../common/Content";
import NoResult from "../../common/NoResult";
import Pagination from "../../common/Pagination";
import TileMovie from "../../common/TileMovie";
import TilePerson from "../../common/TilePerson";
import { TilesPersonSection, TilesSection, } from "../../common/TilesSection/styled";
import { searchPageNumber, searchTypePage, } from "../../common/Searcher/searchQueryParamName";
import useQueryParameter from "../../common/Searcher/useQueryParameter";
import { useTypePage } from "../../common/Searcher/useTypePage";

const SearchContentSelector = ({ query, searchList }) => {
   const pageType = useTypePage();

   const page = useQueryParameter(searchPageNumber);
   const type = useQueryParameter(searchTypePage);
   let returned = "";

   switch (pageType) {
      case "movie":
         returned = (
            <Content
               title={
                  searchList.total_results !== 0
                     ? `Search results for "${query}" (${searchList.total_results})`
                     : `Sorry, no results for "${query}"`
               }
               body={
                  searchList.total_results !== 0 ? (
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
                  ) : (
                     <NoResult />
                  )
               }
               pagination={
                  searchList.total_results !== 0 ? (
                     <Pagination
                        param={"search"}
                        page={parseInt(page)}
                        searchQuery={`?type=${type}&query=${query}&page=`}
                        totalPages={searchList.total_pages}
                     />
                  ) : null
               }
            />
         );
         break;
      case "person":
         returned = (
            <Content
               title={
                  searchList.total_results !== 0
                     ? `Search results for "${query}" (${searchList.total_results})`
                     : `Sorry, no results for "${query}"`
               }
               body={
                  searchList.total_results !== 0 ? (
                     <TilesPersonSection>
                        {searchList.searchList.map((person) => (
                           <TilePerson key={person.id} person={person} />
                        ))}
                     </TilesPersonSection>
                  ) : (
                     <NoResult />
                  )
               }
               pagination={
                  searchList.total_results !== 0 ? (
                     <Pagination
                        param={"search"}
                        page={parseInt(page)}
                        searchQuery={`?type=${type}&query=${query}&page=`}
                        totalPages={searchList.total_pages}
                     />
                  ) : null
               }
            />
         );
         break;
   }

   return returned;
};

export default SearchContentSelector;
