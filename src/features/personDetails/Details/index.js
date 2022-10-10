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
   BirthdayDateSection,
   BirthPlaceSection,
   P
} from "./styled";

const TileDetails = ({ selectedPerson }) => {

   return (
      <Wrapper>
         <StyledTilePerson>
            {selectedPerson.profile_path
               ?
               <Poster src={`https://image.tmdb.org/t/p/w500//${selectedPerson.profile_path}`} />
               :
               <NoPoster>
                  <StyledPersonIcon>
                     <PersonIcon width={"100%"} height={"100%"} />
                  </StyledPersonIcon>
               </NoPoster>
            }
            <InfoSection>
               <PersonName>{selectedPerson.name}</PersonName>
               <BirthdayDateSection>
                  <GreyText>Date of birth:</GreyText> {selectedPerson.birthday}
               </BirthdayDateSection>
               <BirthPlaceSection>
                  <GreyText>Place of birth:</GreyText> {selectedPerson.place_of_birth}
               </BirthPlaceSection>
            </InfoSection>
            <Description>
               <P>{selectedPerson.biography}</P>
            </Description>
         </StyledTilePerson>
      </Wrapper>
   );
};

export default TileDetails;