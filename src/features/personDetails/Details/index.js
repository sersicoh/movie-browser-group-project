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
  const picture = `https://image.tmdb.org/t/p/w500//8dCFK8FDFQbYFZvzAE9IIeaDMKo.jpg`;

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
                        <GreyText>Date of birth:</GreyText> 24.10.2020
                    </BirthdayDateSection>
                    <BirthPlaceSection>
                        <GreyText>Place of birth:</GreyText> China, USA
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