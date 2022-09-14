import MovieIcon from '../../iconComponents/MovieIcon'
import StarIcon from '../../iconComponents/StarIcon'
import {
    StyledMovieIcon,
    MovieTitle,
    MovieYear,
    NoPoster,
    Poster,
    StyledTileMovie,
    Wrapper,
    Tag,
    Tags,
    StyledStarIcon,
    RatingSection,
    Rate,
    Votes,
    StyledNavLink
} from "./styled";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/getMovieData/MovieList/movieSlice";
import { useParams } from "react-router-dom";
import { getMovieById, selectMoviesDetails } from "../../features/getMovieData/MovieDetails/movieDetailsSlice";
import { selectMovies } from '../../features/getMovieData/MovieList/movieSlice';

const TileDetails = () => {
const{movieDetails} = useSelector(selectMoviesDetails);
const {movieList} = useSelector(selectMovies);
console.log(movieDetails);
console.log(movieList);
    //  const params = useParams();
    // const {movieDetails} = useSelector((state) => getMovieById(state, params.id));
    const picture = `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`;


    return (
        <Wrapper>
            <StyledTileMovie>
      <MovieTitle key={movieDetails.id}>{movieDetails.title}</MovieTitle>
                {picture
                    ?
                    <Poster src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`} />
                    :
                    <NoPoster>
                        <StyledMovieIcon>
                            <MovieIcon width={"100%"} height={"100%"} />
                        </StyledMovieIcon>
                    </NoPoster>}
            </StyledTileMovie>
        </Wrapper>
    );

};

export default TileDetails;

// {movie.original_title}