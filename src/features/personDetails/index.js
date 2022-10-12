import Content from "../../common/Content";
import TileDetails from "./Details";
import Cast from "./MoviesCast";
import Crew from "./MoviesCrew";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import { useDispatch, useSelector } from "react-redux";
import { selectPersonDetails, fetchPersonDetails } from "../getMovieData/PeopleSlice/peopleSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const PersonDetails = () => {

   const { id } = useParams();
   const dispatch = useDispatch();

   const selectedPerson = useSelector(selectPersonDetails);

   useEffect(() => {
      dispatch(fetchPersonDetails(id));
   }, [id, dispatch]);

   let returned = "";

   switch (selectedPerson.ifLoading) {
      case "loading":
         returned = <Loading />;
         break;
      case "success":
         returned = (
            <Content
               body={
                  <>
                     <TileDetails selectedPerson={selectedPerson.personDetails} />
                     <Cast selectedCast={selectedPerson.cast} />
                     <Crew selectedCrew={selectedPerson.crew} />
                  </>
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
   };

   return returned;

};

export default PersonDetails;