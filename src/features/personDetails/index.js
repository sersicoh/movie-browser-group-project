import Content from "../../common/Content";
import TileDetails from "./Details";
import Cast from "./MoviesCast";
import Crew from "./MoviesCrew";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesDetails, setLoading } from "../getMovieData/MovieSlice/movieSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const PersonDetails = () => {

  return (
  // const { id } = useParams();
  // const dispatch = useDispatch();

  // const selectedMovie = useSelector(selectMoviesDetails);

  // useEffect(() => {
  //   dispatch(setLoading(id));
  // }, [id, dispatch]);

  // let returned = "";

  // switch (selectedMovie.ifMovieDetailsLoading) {
  //   case "loading":
  //     returned = (
  //       <h1>Ładowanie</h1>
  //     );
  //     break;
  //   case "success":
      // returned = (
        <>
          {/* <PosterBig selectedMovie={selectedMovie.movieDetails} /> */}
          <Content
            body={
              <>
                <TileDetails  />
                <Cast />
                <Crew />
              </>
            }
          />
        </>
      );
  //     break;
  //   default:
  //     returned = <h1>Coś nie pykło</h1>;
  // }

  // return returned;

};

export default PersonDetails;

//selectedMovie={selectedMovie.movieDetails}