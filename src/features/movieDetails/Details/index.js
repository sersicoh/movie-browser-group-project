import MovieIcon from "../../../iconComponents/MovieIcon";
import StarIcon from "../../../iconComponents/StarIcon";
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
  Description,
  ProductionSection,
  ReleaseDateSection,
  GreyText,
  InfoSection,
  RateScale,
} from "./styled";

const Details = ({ selectedMovie }) => {

  const picture = `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`;

  return (
    <Wrapper>
      <StyledTileMovie>
        {picture ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
          />
        ) : (
          <NoPoster>
            <StyledMovieIcon>
              <MovieIcon width={"100%"} height={"100%"} />
            </StyledMovieIcon>
          </NoPoster>
        )}
        <InfoSection>
          <MovieTitle>{selectedMovie.title}</MovieTitle>
          <MovieYear>{selectedMovie.release_date}</MovieYear>
          <ProductionSection>
            <GreyText>Production: </GreyText>
            {selectedMovie.production_countries.map((country) => (country.name))}
            {/* To jest do rozkminienia */}
          </ProductionSection>
          <ReleaseDateSection>
            <GreyText>Release Date: </GreyText> {selectedMovie.release_date}
          </ReleaseDateSection>
          <Tags>
          {selectedMovie.genres.map((tag) => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
          </Tags>
          <RatingSection>
            <StyledStarIcon>
              <StarIcon width={"100%"} height={"100%"} />
            </StyledStarIcon>
            <Rate>{selectedMovie.vote_average.toFixed(1)}</Rate>
            <RateScale> / 10</RateScale>
            <Votes>{selectedMovie.vote_count} votes</Votes>
          </RatingSection>
        </InfoSection>
        <Description>{selectedMovie.overview}</Description>
      </StyledTileMovie>
    </Wrapper>
  );
};

export default Details;

