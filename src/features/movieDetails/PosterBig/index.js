import StarIcon from "../../../iconComponents/StarIcon";
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
  return (
    <BackgroundColor>
      <BackgroundImage>
        <Wrapper>
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
      </BackgroundImage>
    </BackgroundColor>
  );
};

export default PosterBig;
