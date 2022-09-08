import MovieIcon from "../../iconComponents/MovieIcon";
import StarIcon from "../../iconComponents/StarIcon";
import {
  Destription,
  StyledMovieIcon,
  MovieTitle,
  MovieYear,
  NoPoster,
  Poster,
  StyledTileMovie,
  MovieSection,
  Tag,
  Tags,
  StyledStarIcon,
  RatingSection,
  Rate,
  Votes,
} from "./styled";
import { useSelector } from "react-redux";
import { selectGenres } from "../../features/getMovieData/MovieList/movieSlice";

const TileMovie = ({ movie, genreIds, releaseDate }) => {
  const picture = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const { genreList } = useSelector(selectGenres);

  return (
    <StyledTileMovie>
      <MovieSection>
        {picture ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
        ) : (
          <NoPoster>
            <StyledMovieIcon>
              <MovieIcon width={"100%"} height={"100%"} />
            </StyledMovieIcon>
          </NoPoster>
        )}
        <Destription>
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
        </Destription>
      </MovieSection>
    </StyledTileMovie>
  );
};

export default TileMovie;
