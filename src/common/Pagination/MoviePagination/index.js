import {
  PageInfo,
  PageNumber,
  PaginationTiles,
  StyledPaginationSection,
  StyledText,
} from "../styled";
import { SingleLeftArrow, SingleRightArrow } from "../Arrows";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   selectMovies,
//   fetchPopularMovies,
// } from "../../../features/getMovieData/MovieSlice/movieSlice";
// import { NavLink, useParams } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
// import useReplaceQueryParameter from "../../useReplaceQueryParameter";

function MoviePagination({ page }) {
  let totalPages = 500;
  //     const {ifMoviesLoading} = useSelector(selectMovies);
  //     const { moviePage } = useSelector(selectMovies);
  //     const dispatch = useDispatch();
  //     const { pathname } = useLocation();
  //     const navigate = useNavigate();
  //     const replaceQueryParameter = useReplaceQueryParameter();

  return (
    <StyledPaginationSection>
      <PaginationTiles disabled={page <= 1 ? true : false} to={`/movies/1`}>
        <SingleLeftArrow disabled={page <= 1 ? true : false} />
        <StyledText>First</StyledText>
      </PaginationTiles>
      <PaginationTiles
        disabled={page <= 1 ? true : false}
        to={`/movies/${page - 1}`}
      >
        <SingleLeftArrow disabled={page <= 1 ? true : false} />
        <StyledText>Previous</StyledText>
      </PaginationTiles>
      <PageInfo>Page</PageInfo>
      <PageNumber>{page}</PageNumber>
      <PageInfo>of</PageInfo>
      <PageNumber>{totalPages}</PageNumber>

      <PaginationTiles
        disabled={page === totalPages ? true : false}
        to={`/movies/${page + 1}`}
      >
        <StyledText>Next</StyledText>
        <SingleRightArrow disabled={page === totalPages ? true : false} />
      </PaginationTiles>

      <PaginationTiles
        disabled={page === totalPages ? true : false}
        to={`/movies/${totalPages}`}
      >
        <StyledText>Last</StyledText>
        <SingleRightArrow disabled={page === totalPages ? true : false} />
      </PaginationTiles>
    </StyledPaginationSection>
  );
}

export default MoviePagination;
