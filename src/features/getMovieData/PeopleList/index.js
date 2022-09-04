import { List, Person, Content, Img } from "./styled";
import { useSelector } from "react-redux";
import { selectPeople } from "./peopleSlice";

const PeopleList = () => {
  const { peopleList } = useSelector(selectPeople);

  return (
    <List>
      {peopleList.map((person) => (
        <Person key={person.id}>
          <Content>
            &nbsp;&nbsp;
            <Img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} />
          </Content>
          <Content>ID: {person.id}</Content>
          <Content>Imię: {person.name}</Content>
          <p></p>
        </Person>
      ))}
    </List>
  );
};

export default PeopleList;




// <PeopleList>
//                         {peopleList.map((person) =>
//                             <PersonTile key={person.id}
//                                 name={person.name}
//                                 portrait={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
//                                 id={person.id}
//                             />
//                         )}
//                     </PeopleList>