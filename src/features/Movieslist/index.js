import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import Loading from "../../common/Loading";
import ErrorPage from "../../common/Error";
import Pagination from "../../common/Pagination";
import { selectMovies, fetchPopularMovies } from "../getMovieData/MovieSlice/movieSlice";
import { TilesSection } from "../../common/TilesSection/styled";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import moment from "moment";

const MovieList = () => {

   const dispatch = useDispatch();
   const movieList = useSelector(selectMovies);
   const { page } = useParams();
   const currentPage = page;

   useEffect(() => {
      dispatch(fetchPopularMovies(currentPage));
   }, [currentPage, dispatch]);

   let returned = "";

   switch (movieList.ifLoading) {
      case "loading":
         returned = <Loading />;
         break;
      case "success":
         returned =
            (
               <Content
                  title="Popular Movies"
                  body={
                     <TilesSection>
                        {movieList.movieList.map((movie) => (
                           <TileMovie
                              key={movie.id}
                              movie={movie}
                              genreIds={movie.genre_ids}
                              releaseDate={moment(movie.release_date).format("YYYY")}
                           />
                        ))}
                     </TilesSection>
                  }
                  pagination={
                     <Pagination
                        param={"movies"}
                        page={parseInt(currentPage)}
                        totalPages={movieList.total_pages}
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

export default MovieList;

