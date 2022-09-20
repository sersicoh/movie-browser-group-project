import Content from "../../common/Content";
import TilePerson from "../../common/TilePerson";
import { useSelector } from "react-redux";
import { selectPeople } from "../getMovieData/PeopleList/peopleSlice"
import { TilesPersonSection } from "../../common/TilesSection/styled";

const PersonList = () => {

  const { peopleList } = useSelector(selectPeople);

  return (
    <Content
      title="Popular People"
      body={
        <>
          <TilesPersonSection>
            {peopleList.map((person) => (
              <TilePerson
                key={person.id}
                person={person}
              />
            ))}
          </TilesPersonSection>
        </>
      }   
    />
  )
};

export default PersonList;