// import Content from "../../common/Content";
// import TileDetails from "./Details";
// import Cast from "./MoviesCast";
// import Crew from "./MoviesCrew";
// import { useDispatch, useSelector } from "react-redux";
// import { selectPersonDetails, setLoading } from "../getMovieData/PeopleSlice/peopleSlice";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// const PersonDetails = () => {

//   const { id } = useParams();
//    const dispatch = useDispatch();

//   const selectedPerson = useSelector(selectPersonDetails);

//    useEffect(() => {
//      dispatch(setLoading(id));
//      //setLoading zamieniamy wszedzie na np. fetchPersonDetails
//    }, [id, dispatch]);

//    let returned = "";

//    switch (selectedPerson.ifLoading) {
//      case "loading":
//        returned = (
//          <h1>Ładowanie</h1>
//      );
//        break;
//      case "success":
//        returned = (
//         <>
//           <Content
//             body={
//               <>
//                 <TileDetails  />
//                 <Cast />
//                 <Crew />
//               </>
//             }
//           />
//         </>
//        );
//        break;

//      default:
//        returned = <h1>Coś nie pykło</h1>;
//    }

//    return returned;

// };

// export default PersonDetails;





// export default PersonDetails;
