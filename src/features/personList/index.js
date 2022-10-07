import Content from "../../common/Content";
import TilePerson from "../../common/TilePerson";
import { fetchPopularPeople, selectPeople } from "../getMovieData/PeopleSlice/peopleSlice"
import { TilesPersonSection } from "../../common/TilesSection/styled";
import PersonPagination from "../../common/Pagination/PersonPagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const PersonList = () => {
  const dispatch = useDispatch();
  const { peopleList } = useSelector(selectPeople);
  const { page } = useParams();
  const currentPage = page;
  useEffect(() => {
    dispatch(fetchPopularPeople(currentPage));
}, [currentPage, dispatch]);

  return (
    <Content
      title="Popular People"
      body={
          <TilesPersonSection>
            {peopleList.map((person) => (
              <TilePerson
                key={person.id}
                person={person}
              />
            ))}
          </TilesPersonSection>
      }
      pagination={
        <PersonPagination page={parseInt(currentPage)}/>
      }
    />
  )
};

export default PersonList;