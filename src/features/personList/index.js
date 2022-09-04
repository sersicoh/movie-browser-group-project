import Content from "../../common/Content";
import TilePerson from "../../common/TilePerson";
import { TilesSection } from "../../common/TilesSection/styled";


const PersonList = () => {

    return (
        <Content
            title="Popular People"
            body={
                <>
                    <TilesSection>
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                    </TilesSection>
                    <TilesSection>
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                    </TilesSection>
                    <TilesSection>
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                    </TilesSection>
                    <TilesSection>
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                        <TilePerson />
                    </TilesSection>
                </>
            }
        />
    )
};

export default PersonList;