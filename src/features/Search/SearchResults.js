import Content from "../../common/Content";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import { selectLoadingState, selectSearchList, setSearchLoading } from "../getMovieData/SearchSlice/searchSlice";
import { TilesSection } from "../../common/TilesSection/styled";
import TileMovie from "../../common/TileMovie";
import moment from "moment";

const SearchResults = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const searchList = useSelector(selectSearchList);

  const payload = {
    query: new URLSearchParams(location.search).get("query"),
    type: new URLSearchParams(location.search).get("type"),
    page: new URLSearchParams(location.search).get("page"),
  }

  useEffect(() => {
    dispatch(setSearchLoading(payload));
  },[dispatch]);

  let returned = "";

  switch (searchList.ifSearchLoading) {
    case "loading":
      returned = (
        <Loading />
      );
      break;
    case "success":
      returned = (

        <Content
          title="dupa"
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
        />
      );
      break;
    default:
      returned = <ErrorPage />;
  }

  return returned;

};

export default SearchResults;
