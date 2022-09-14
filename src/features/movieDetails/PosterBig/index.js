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

const PosterBig = () => {
  const picture = Picture;

  return (
    <BackgroundColor>
      <Wrapper>
        <BackgroundImage src={picture} />
        <InfoSection>
          <MovieTitle>Full movie title</MovieTitle>
          <RatingSection>
            <StyledStarIcon>
              <StarIcon width={"100%"} height={"100%"} />
            </StyledStarIcon>
            <Rate>7.8</Rate>
            <RateScale> / 10</RateScale>
          </RatingSection>
          <Votes>1723 votes</Votes>
        </InfoSection>
      </Wrapper>
    </BackgroundColor>
  );
};

export default PosterBig;
