import StarIcon from "../../../iconComponents/StarIcon";
import Picture from "../../../iconComponents/PosterBig.png";

import {
  MovieTitle,
  BackgroundColor,
  StyledStarIcon,
  RatingSection,
  Rate,
  Votes,
  RateScale,
  BackgroundImage,
  InfoSection,
  Wrapper,
} from "./styled";

const PosterBig = ({ selectedMovie }) => {

  const picture = `https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`;

  return (
      <BackgroundColor>
      <Wrapper>  
        <BackgroundImage src={picture} />
        <InfoSection>
          <MovieTitle>{selectedMovie.title}</MovieTitle>
          <RatingSection>
            <StyledStarIcon>
              <StarIcon width={"100%"} height={"100%"} />
            </StyledStarIcon>
            <Rate>{selectedMovie.vote_average}</Rate>
            <RateScale> / 10</RateScale>
          </RatingSection>
          <Votes>{selectedMovie.vote_count} votes</Votes>
        </InfoSection>
      </Wrapper>
      </BackgroundColor>
  );
};

export default PosterBig;
