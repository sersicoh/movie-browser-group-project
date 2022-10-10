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
   StyledRow,
} from "./styled";

const PosterBig = ({ selectedMovie }) => {

   const picture = `https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`;

   return (
      <BackgroundColor>
         <Wrapper>
            {selectedMovie.backdrop_path !== null ? <BackgroundImage src={picture} /> : ""}
            <InfoSection>
               <StyledRow>
                  <MovieTitle>{selectedMovie.title}</MovieTitle>
               </StyledRow>
               <RatingSection>
                  <StyledRow>
                     <StyledStarIcon>
                        <StarIcon width={"100%"} height={"100%"} />
                     </StyledStarIcon>
                     <Rate>{selectedMovie.vote_average.toFixed(1)}</Rate>
                     <RateScale>/ 10</RateScale>
                  </StyledRow>
                  <Votes>{selectedMovie.vote_count} votes</Votes>
               </RatingSection>
            </InfoSection>
         </Wrapper>
      </BackgroundColor>
   );
};

export default PosterBig;
