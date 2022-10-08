import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import { selectLoadingState, selectSearchList, setSearchLoading } from "../getMovieData/SearchSlice/searchSlice";
import { searchPageNumber, searchQueryParamName, searchTypePage } from "../../common/Searcher/searchQueryParamName";
import SearchContentSelector from "./SearchContentSelector";

const SearchResults = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  const searchList = useSelector(selectSearchList);

  const payload = {
    query: new URLSearchParams(location.search).get(searchQueryParamName),
    type: new URLSearchParams(location.search).get(searchTypePage),
    page: new URLSearchParams(location.search).get(searchPageNumber),
  }

  useEffect(() => {
    dispatch(setSearchLoading(payload));
  }, [payload.query, dispatch]);

  let returned = "";

  switch (searchList.ifSearchLoading) {
    case "loading":
      returned = (
        <Loading />
      );
      break;
    case "success":
      returned = (
        <SearchContentSelector query={payload.query} searchList={searchList} />
      );
      break;
    default:
      returned = <ErrorPage />;
  }

  return returned;

};

export default SearchResults;
