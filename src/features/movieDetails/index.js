import Content from "../../common/Content";
import Details from "./Details";
import Cast from "./Cast";
import Crew from "./Crew";
import PosterBig from "./PosterBig";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails, selectMoviesDetails } from "../getMovieData/MovieSlice/movieSlice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const MovieDetails = () => {

   const { id } = useParams();
   const dispatch = useDispatch();

   const selectedMovie = useSelector(selectMoviesDetails);

   useEffect(() => {
      dispatch(fetchMovieDetails(id));
   }, [id, dispatch]);

   let returned = "";

   switch (selectedMovie.ifLoading) {
      case "loading2":
         returned = <Loading />;
         break;
      case "success2":
         returned = (
            <>
               <PosterBig selectedMovie={selectedMovie.movieDetails} />
               <Content
                  body={
                     <>
                        <Details selectedMovie={selectedMovie.movieDetails} />
                        <Cast selectedCast={selectedMovie.cast} />
                        <Crew selectedCrew={selectedMovie.crew} />
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
