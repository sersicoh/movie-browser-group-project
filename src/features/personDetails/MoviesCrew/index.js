import Content from "../../../common/Content";
import { useSelector } from "react-redux";
import { selectPeople } from "../../getMovieData/PeopleList/peopleSlice";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Crew = () => {

    const { peopleList } = useSelector(selectPeople);

    return (

        <Content title="Movies - Crew (?)"
            body={
                <TilesPersonSection title="Crew">
                    {peopleList.map((person) => (
                        <TilePerson key={person.id} person={person} />
                    ))}
                </TilesPersonSection>
            } />

    );
};

export default Crew;
