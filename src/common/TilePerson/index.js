import PersonIcon from "../../iconComponents/PersonIcon";
import { Destription, PersonName, NoPoster, Poster, StyledTilePerson, StyledPersonIcon, Wrapper, StyledNavLink } from "./styled";

const TilePerson = ({ key, person, personRole }) => {

    return (
        <Wrapper key={key}>
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
                        <PersonName>{personRole}</PersonName>
                    </Destription>
            </StyledTilePerson>
            </StyledNavLink>
        </Wrapper>
    );
};

export default TilePerson;
