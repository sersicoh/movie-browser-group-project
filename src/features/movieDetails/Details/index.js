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

const TileDetails = ({ selectedMovie }) => {

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
            {/* <GreyText>Production: </GreyText>{selectedMovie.production_countries[0].name} */}
          </ProductionSection>
          <ReleaseDateSection>
            <GreyText>Release Date:</GreyText> {selectedMovie.release_date}
          </ReleaseDateSection>
          <Tags>
            <Tag>Thriller</Tag>
            <Tag>Horror</Tag>
            <Tag>Comedy</Tag>
          </Tags>
          <RatingSection>
            <StyledStarIcon>
              <StarIcon width={"100%"} height={"100%"} />
            </StyledStarIcon>
            <Rate>{selectedMovie.vote_average}</Rate>
            <RateScale> / 10</RateScale>
            <Votes>{selectedMovie.vote_count} votes</Votes>
          </RatingSection>
        </InfoSection>
        <Description>{selectedMovie.overview}</Description>
      </StyledTileMovie>
    </Wrapper>
  );
};

export default TileDetails;

