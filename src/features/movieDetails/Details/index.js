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
   Comma,
} from "./styled";
import useWindowDimensions from "../../../common/CustomHooks/useWindowDimensions.js";
import moment from "moment";

const Details = ({ selectedMovie }) => {

   const dimensions = useWindowDimensions();

   return (
      <Wrapper>
         <StyledTileMovie>
            {selectedMovie.poster_path
               ?
               <Poster src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`} />
               :
               <NoPoster>
                  <StyledMovieIcon>
                     <MovieIcon width={"100%"} height={"100%"} />
                  </StyledMovieIcon>
               </NoPoster>
            }
            <InfoSection>
               <MovieTitle>{selectedMovie.title}</MovieTitle>
               <MovieYear>{moment(selectedMovie.release_date).format("YYYY")}</MovieYear>
               <ProductionSection>
                  <GreyText>Production: </GreyText>
                  {selectedMovie.production_countries && selectedMovie.production_countries.map((country) => {
                     if (dimensions.width < 650)
                        return <Comma key={country.iso_3166_1}>{country.iso_3166_1} </Comma>;
                     return <Comma key={country.name}>{country.name} </Comma>;
                  })}
               </ProductionSection>
               <ReleaseDateSection>
                  <GreyText>Release Date: </GreyText> {selectedMovie.release_date}
               </ReleaseDateSection>
               <Tags>
                  {selectedMovie.genres && selectedMovie.genres.map((tag) => (
                     <Tag key={tag.id}>{tag.name}</Tag>
                  ))}
               </Tags>
               <RatingSection>
                  <StyledStarIcon>
                     <StarIcon width={"100%"} height={"100%"} />
                  </StyledStarIcon>
                  <Rate>{selectedMovie.vote_average && selectedMovie.vote_average.toFixed(1)}</Rate>
                  <RateScale>/ 10</RateScale>
                  <Votes>{selectedMovie.vote_count} votes</Votes>
               </RatingSection>
            </InfoSection>
            <Description>{selectedMovie.overview}</Description>
         </StyledTileMovie>
      </Wrapper>
   );
};

export default Details;
