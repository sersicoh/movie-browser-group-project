// import MovieIcon from "../../../iconComponents/MovieIcon";
// import StarIcon from "../../../iconComponents/StarIcon";
// import {
//   StyledMovieIcon,
//   MovieTitle,
//   MovieYear,
//   NoPoster,
//   Poster,
//   StyledTileMovie,
//   Wrapper,
//   Tag,
//   Tags,
//   StyledStarIcon,
//   RatingSection,
//   Rate,
//   Votes,
//   Description,
//   ProductionSection,
//   ReleaseDateSection,
//   GreyText,
//   InfoSection,
//   RateScale,
// } from "./styled";

// const TileDetails = ({ selectedMovie }) => {

//   const picture = `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`;

//   return (
//     <Wrapper>
//       <StyledTileMovie>
//         {picture ? (
//           <Poster
//             src={`https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`}
//           />
//         ) : (
//           <NoPoster>
//             <StyledMovieIcon>
//               <MovieIcon width={"100%"} height={"100%"} />
//             </StyledMovieIcon>
//           </NoPoster>
//         )}
//         <InfoSection>
//           <MovieTitle>{selectedMovie.title}</MovieTitle>
//           <MovieYear>{selectedMovie.release_date}</MovieYear>
//           <ProductionSection>
//             {/* <GreyText>Production: </GreyText>{selectedMovie.production_countries[0].name} */}
//           </ProductionSection>
//           <ReleaseDateSection>
//             <GreyText>Release Date:</GreyText> {selectedMovie.release_date}
//           </ReleaseDateSection>
//           <Tags>
//             <Tag>Thriller</Tag>
//             <Tag>Horror</Tag>
//             <Tag>Comedy</Tag>
//           </Tags>
//           <RatingSection>
//             <StyledStarIcon>
//               <StarIcon width={"100%"} height={"100%"} />
//             </StyledStarIcon>
//             <Rate>{selectedMovie.vote_average}</Rate>
//             <RateScale> / 10</RateScale>
//             <Votes>{selectedMovie.vote_count} votes</Votes>
//           </RatingSection>
//         </InfoSection>
//         <Description>{selectedMovie.overview}</Description>
//       </StyledTileMovie>
//     </Wrapper>
//   );
// };

// export default TileDetails;

import StarIcon from "../../../iconComponents/StarIcon";
import PersonIcon from "../../../iconComponents/PersonIcon";
import {
  StyledPersonIcon,
  PersonName,
  NoPoster,
  Poster,
  StyledTilePerson,
  Wrapper,
  Description,
  GreyText,
  InfoSection,
  RateScale,
  BirthdayDateSection,
  BirthPlaceSection
} from "./styled";

const TileDetails = () => {
  const picture = ``;

  return (
    <Wrapper>
      <StyledTilePerson>
        {picture ? (
          <Poster
            src={`https://image.tmdb.org/t/p/w500//8dCFK8FDFQbYFZvzAE9IIeaDMKo.jpg`}
          />
        ) : (
          <NoPoster>
            <StyledPersonIcon>
              <PersonIcon width={"100%"} height={"100%"} />
            </StyledPersonIcon>
          </NoPoster>
        )}
                <InfoSection>
                    <PersonName>Liu Yifei</PersonName>
                    <BirthdayDateSection>
                        <GreyText>Release Date:</GreyText> 24.10.2020
                    </BirthdayDateSection>
                    <BirthPlaceSection>
                        <GreyText>Production:</GreyText> China, USA
                    </BirthPlaceSection>
                </InfoSection>
                    <Description>
                        A young Chinese maiden disguises herself as a male warrior in order
                        to save her father. Disguises herself as a male warrior in order to
                        save her father. A young Chinese maiden disguises herself as a male
                        warrior in order to save her father.
                    </Description>
        </StyledTilePerson>
    </Wrapper>
  );
};

export default TileDetails;