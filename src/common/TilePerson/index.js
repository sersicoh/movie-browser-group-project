import PersonIcon from "../../iconComponents/PersonIcon";
import { Destription, PersonName, NoPoster, Poster, StyledTilePerson, PersonSection, StyledPersonIcon } from "./styled";

const TilePerson = () => {

    const picture = false;

    const data = {
        picture: false,
        name: "Liu Yifei",
        birth: "25.08.1987",
    }

    return (
        <StyledTilePerson>
            <PersonSection>
                {picture ?
                    <Poster
                    /> :
                    <NoPoster>
                        <StyledPersonIcon>
                            <PersonIcon width={"100%"} height={"100%"} />
                        </StyledPersonIcon>
                    </NoPoster>}
                <Destription>
                    <PersonName>{data.name}</PersonName>
                 </Destription>
            </PersonSection>
        </StyledTilePerson>
    );

};

export default TilePerson;
