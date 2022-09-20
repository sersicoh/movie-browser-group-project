import PersonIcon from "../../iconComponents/PersonIcon";
import { Destription, PersonName, NoPoster, Poster, StyledTilePerson, StyledPersonIcon, Wrapper, StyledNavLink } from "./styled";

const TilePerson = ({ person }) => {

    const picture = `https://image.tmdb.org/t/p/w500/${person.profile_path}`;

    return (
        <Wrapper>
            <StyledNavLink to={`/personDetails/${person.id}`}>
            <StyledTilePerson>
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
            </StyledTilePerson>
            </StyledNavLink>
        </Wrapper>
    );
};

export default TilePerson;
