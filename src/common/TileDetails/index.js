import MovieIcon from '../../iconComponents/MovieIcon'
import {
    StyledMovieIcon,
    MovieTitle,
    NoPoster,
    Poster,
    StyledTileMovie,
    Wrapper,
} from "./styled";

const TileDetailss = () => {

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

export default TileDetailss;

// {movie.original_title}