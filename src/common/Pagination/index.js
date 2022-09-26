import { PageInfo, PageNumber, PaginationTiles, StyledPaginationSection, StyledText } from "./styled";
import { SingleLeftArrow, SingleRightArrow } from "./Arrows";
import { useSelector, useDispatch } from "react-redux";
import {selectMovies, fetchPopularMoviesPage} from "../../features/getMovieData/MovieSlice/movieSlice"
import { NavLink, useParams } from "react-router-dom";

function Pagination() {

    // let page = 1;

    let totalPages = 600;

    if (totalPages > 500) { totalPages = 500 };

    const {ifMoviesLoading} = useSelector(selectMovies);
    const { moviePage } = useSelector(selectMovies);
    const dispatch = useDispatch();
    const { page } = useParams();

    return (

        <StyledPaginationSection>
            <PaginationTiles
                disabled={page <= 1 ? true : false}
                onClick={() => page = 1}
            >
                <SingleLeftArrow disabled={page <= 1 ? true : false} />
                <StyledText>First</StyledText>
            </PaginationTiles>
            <PaginationTiles
                disabled={page <= 1 ? true : false}
                onClick={() => page = page - 1}
            >
                <SingleLeftArrow disabled={page <= 1 ? true : false} />
                <StyledText>Previous</StyledText>
            </PaginationTiles>
            <PageInfo>Page</PageInfo>
            <PageNumber>{page}</PageNumber>
            <PageInfo>of</PageInfo>
            <PageNumber>{totalPages}</PageNumber>
            <NavLink to={`/movieDetails/${moviePage}`}>
            <PaginationTiles
                disabled={page === totalPages ? true : false}
                onClick={() => page = page + 1}
               // onClick={() => dispatch(fetchPopularMoviesPage(moviePage))}
            >
                <StyledText>Next</StyledText>
                <SingleRightArrow disabled={page === totalPages ? true : false} />
            </PaginationTiles>
            </NavLink>
            <PaginationTiles
                disabled={page === totalPages ? true : false}
                onClick={() => page = totalPages}
            >
                <StyledText>Last</StyledText>
                <SingleRightArrow disabled={page === totalPages ? true : false} />
            </PaginationTiles>
        </StyledPaginationSection>
    );
}

export default Pagination;