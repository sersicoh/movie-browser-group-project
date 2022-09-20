import Content from "../../../common/Content";
import { useSelector } from "react-redux";
import { selectPerson } from "../../getMovieData/MovieSlice/movieSlice";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Crew = ({selectedCrew}) => {

    return (

        <Content title= {"Crew" + " (" + selectedCrew.length + ")"}
            body={
                <TilesPersonSection>
                    {selectedCrew.map((person) => (
                        <TilePerson key={person.id} person={person} />
                    ))}
                </TilesPersonSection>
            } />

    );
};

export default Crew;




