import Content from "../../../common/Content";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Crew = ({selectedCrew}) => {

    return (

        <Content title= {"Crew" + " (" + selectedCrew.length + ")"}
            body={
                <TilesPersonSection>
                    {selectedCrew.map((person) => (
                        <TilePerson key={person.id + "_" + person.job} person={person} personRole={person.job} />
                    ))}
                </TilesPersonSection>
            } />

    );
};

export default Crew;




