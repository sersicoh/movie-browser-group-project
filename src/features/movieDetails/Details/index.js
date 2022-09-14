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

const TileDetails = () => {
  const picture = `https://image.tmdb.org/t/p/w500/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg`;

  return (
    <Wrapper>
      <StyledTileMovie>
        {picture ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500/9f5sIJEgvUpFv0ozfA6TurG4j22.jpg`}
          />
        ) : (
          <NoPoster>
            <StyledMovieIcon>
              <MovieIcon width={"100%"} height={"100%"} />
            </StyledMovieIcon>
          </NoPoster>
        )}
                <InfoSection>
                    <MovieTitle>Mulan</MovieTitle>
                    <MovieYear>2020</MovieYear>
                    <ProductionSection>
                        <GreyText>Production:</GreyText> China, United States of America
                    </ProductionSection>
                    <ReleaseDateSection>
                        <GreyText>Release Date:</GreyText> 24.10.2020
                    </ReleaseDateSection>
                    <Tags>
                        <Tag>Thriller</Tag>
                        <Tag>Horror</Tag>
                        <Tag>Comedy</Tag>
                    </Tags>
                    <div />
                    <RatingSection>
                        <StyledStarIcon>
                            <StarIcon width={"100%"} height={"100%"} />
                        </StyledStarIcon>
                        <Rate>7.8</Rate>
                        <RateScale>/ 10</RateScale>
                        <Votes>1000 votes</Votes>
                    </RatingSection>
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order
                        to save her father. Disguises herself as a male warrior in order to
                        save her father. A young Chinese maiden disguises herself as a male
                        warrior in order to save her father.
                    </Description>
                </InfoSection>
        </StyledTileMovie>
    </Wrapper>
  );
};

export default TileDetails;
