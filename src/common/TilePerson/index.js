import PersonIcon from "../../iconComponents/PersonIcon";
import { Destription, PersonName, NoPoster, Poster, StyledTilePerson, StyledPersonIcon, Wrapper, StyledNavLink, PersonRole } from "./styled";

const TilePerson = ({person, personRole }) => {

    return (
        <Wrapper>
            <StyledNavLink to={`/personDetails/${person.id}`}>
                <StyledTilePerson>
                    {person.profile_path === null
                        ?
                        <NoPoster>
                            <StyledPersonIcon>
                                <PersonIcon width={"100%"} height={"100%"} />
                            </StyledPersonIcon>
                        </NoPoster>
                        :
                        <Poster src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
                    }
                    <Destription>
                        <PersonName>{person.name}</PersonName>
                        <PersonRole>{personRole}</PersonRole>

                    </Destription>
                </StyledTilePerson>
            </StyledNavLink>
        </Wrapper>
    );
};

export default TilePerson;
