import MovieIcon from '../../iconComponents/MovieIcon'
import StarIcon from '../../iconComponents/StarIcon'
import { Destription, StyledMovieIcon, MovieTitle, MovieYear, NoPoster, Poster, StyledTileMovie, MovieSection, Tag, Tags, StyledStarIcon, RatingSection, Rate, Votes } from "./styled";

const TileMovie = ({ movie }) => {

    const picture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <StyledTileMovie>
            <MovieSection>
                {picture
                    ?
                    <Poster src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    :
                    <NoPoster>
                        <StyledMovieIcon>
                            <MovieIcon width={"100%"} height={"100%"} />
                        </StyledMovieIcon>
                    </NoPoster>}
                <Destription>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieYear>{movie.release_date}</MovieYear>
                    <Tags>
                        <Tag>{movie.genre_ids[0]}</Tag>
                    </Tags>
                    <RatingSection>
                        <StyledStarIcon>
                            <StarIcon width={"100%"} height={"100%"} />
                        </StyledStarIcon>
                        <Rate>{movie.vote_average}</Rate>
                        <Votes>{movie.vote_count} votes</Votes>
                    </RatingSection>
                </Destription>
            </MovieSection>
        </StyledTileMovie>
    );

};

export default TileMovie;
