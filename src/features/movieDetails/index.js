import Content from "../../common/Content";
import TileDetails from "./Details";
import Cast from "./Cast";
import Crew from "./Crew";
import PosterBig from "./PosterBig";
import { useDispatch, useSelector } from "react-redux";
import { selectMoviesDetails, setLoading } from "../getMovieData/MovieDetails/movieDetailsSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";

const MovieDetails = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedMovie = useSelector(selectMoviesDetails);

  useEffect(() => {
    dispatch(setLoading(id));
  }, [id, dispatch]);

  let returned = "";

  switch (selectedMovie.ifMovieDetailsLoading) {
    case "loading":
      returned = (
        <Loading />
      );
      break;
    case "success":
      returned = (
        <>
          <PosterBig selectedMovie={selectedMovie.movieDetails} />
          <Content
            body={
              <>
                <TileDetails selectedMovie={selectedMovie.movieDetails} />
                <Cast />
                <Crew />
              </>
            }
          />
        </>
      );
      break;
    default:
      returned = <ErrorPage />;
  }

  return returned;

};

export default MovieDetails;
