import PersonIcon from "../../iconComponents/PersonIcon";
import { Destription, PersonName, NoPoster, Poster, StyledTilePerson, PersonSection, StyledPersonIcon } from "./styled";

const TilePerson = ({ person }) => {

    const picture = `https://image.tmdb.org/t/p/w500/${person.profile_path}`;

    return (
        <StyledTilePerson>
            <PersonSection>
                {picture
                    ?
                    <Poster src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
                    :
                    <NoPoster>
                        <StyledPersonIcon>
                            <PersonIcon width={"100%"} height={"100%"} />
                        </StyledPersonIcon>
                    </NoPoster>
                    }
                <Destription>
                    <PersonName>{person.name}</PersonName>
                </Destription>
            </PersonSection>
        </StyledTilePerson>
    );
};

export default TilePerson;
