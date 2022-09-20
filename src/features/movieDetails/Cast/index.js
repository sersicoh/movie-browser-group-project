import Content from "../../../common/Content";
import { useSelector } from "react-redux";
import { selectPeople } from "../../getMovieData/PeopleSlice/peopleSlice";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Cast = () => {

    const { peopleList } = useSelector(selectPeople);

//     const { id } = useParams();
//   const dispatch = useDispatch();

//   const selectedMovie = useSelector(selectMoviesDetails);

//   useEffect(() => {
//     dispatch(setLoading(id));
//   }, [id, dispatch]);

//   let returned = "";

//   switch (selectedMovie.ifMovieDetailsLoading) {
//     case "loading":
//       returned = (
//         <Loading />
//       );
//       break;
//     case "success":
//       returned = (
//         <>
//           <PosterBig selectedMovie={selectedMovie.movieDetails} />
//           <Content
//             body={
//               <>
//                 <Details selectedMovie={selectedMovie.movieDetails} />
//                 <Cast />
//                 <Crew />
//               </>
//             }
//           />
//         </>
//       );
//       break;
//     default:
//       returned = <ErrorPage />;
//   }

//   return returned;

    return (

        <Content title="Cast (?)"
            body={
                <TilesPersonSection>
                    {peopleList.map((person) => (
                        <TilePerson key={person.id} person={person} />
                    ))}
                </TilesPersonSection>
            } />

    );
};

export default Cast;


