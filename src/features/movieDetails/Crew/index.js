import Content from "../../../common/Content";
import { useSelector } from "react-redux";
import { selectPeople } from "../../getMovieData/PeopleSlice/peopleSlice";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Crew = () => {

    const { peopleList } = useSelector(selectPeople);

    return (

        <Content title="Crew (?)"
            body={
                <TilesPersonSection>
                    {peopleList.map((person) => (
                        <TilePerson key={person.id} person={person} />
                    ))}
                </TilesPersonSection>
            } />

    );
};

export default Crew;





