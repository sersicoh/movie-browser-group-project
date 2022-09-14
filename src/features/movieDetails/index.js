import Content from "../../common/Content";
import TileDetails from "./Details";
import Cast from "./Cast";
import Crew from "./Crew";
import PosterBig from "./PosterBig";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesDetails } from "../getMovieData/MovieDetails/movieDetailsSlice";
import { fetchMovieDetailsWorker } from "../getMovieData/movieDetailsSaga";

const MovieDetails = () => {

  const { movieDetails } = useSelector(selectMoviesDetails);

  console.log("tu to powinno być: " + movieDetails);

  return (
    <>
      <PosterBig />
      <Content
        body={
          <>
            <TileDetails />
            <Cast />
            <Crew />
          </>
        }
      />
    </>
  );
};

export default MovieDetails;
