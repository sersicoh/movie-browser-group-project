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

const TileMovie = ({ movie, genreIds, releaseDate  }) => {

    const picture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const { genreList } = useSelector(selectGenres);
    return (
        <Wrapper>
            <StyledNavLink to={`/movieDetails/${movie.id}`}>
            <StyledTileMovie>
                {picture
                    ?
                    <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    :
                    <NoPoster>
                        <StyledMovieIcon>
                            <MovieIcon width={"100%"} height={"100%"} />
                        </StyledMovieIcon>
                    </NoPoster>}
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieYear>{releaseDate}</MovieYear>
                <Tags>
            {genreList.map(
              (genre) =>
                genreIds.includes(genre.id) && (
                  <Tag key={genre.id}> {genre.name}</Tag>
                )
            )}
          </Tags>
                <RatingSection>
                    <StyledStarIcon>
                        <StarIcon width={"100%"} height={"100%"} />
                    </StyledStarIcon>
                    <Rate>{movie.vote_average}</Rate>
                    <Votes>{movie.vote_count} votes</Votes>
                </RatingSection>
            </StyledTileMovie>
            </StyledNavLink>
        </Wrapper>
    );

};

export default TileMovie;
