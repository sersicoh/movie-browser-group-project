import Content from "../../common/Content";
import TilePerson from "../../common/TilePerson";
import { fetchPopularPeople, selectPeople } from "../getMovieData/PeopleSlice/peopleSlice"
import { TilesPersonSection } from "../../common/TilesSection/styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import Pagination from "../../common/Pagination";

const PersonList = () => {

   const dispatch = useDispatch();
   const peopleList = useSelector(selectPeople);
   const { page } = useParams();
   const currentPage = page;

   useEffect(() => {
      dispatch(fetchPopularPeople(currentPage));
   }, [currentPage, dispatch]);

   let returned = "";

   switch (peopleList.ifLoading) {
      case "loading":
         returned = <Loading />;
         break;
      case "success":
         returned = (
            <Content
               title="Popular People"
               body={
                  <TilesPersonSection>
                     {peopleList.peopleList.map((person) => (
                        <TilePerson
                           key={person.id}
                           person={person}
                        />
                     ))}
                  </TilesPersonSection>
               }
               pagination={
                  <Pagination
                     param={"people"}
                     page={parseInt(currentPage)}
                     totalPages={peopleList.total_pages}
                  />
               }
            />
         );
         break;
         case "error":
            returned =
               (
                  <ErrorPage />
               );
            break;
      default:
         returned = <ErrorPage />;
   }

   return returned;

};

export default PersonList;