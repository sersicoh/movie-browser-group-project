import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import { selectMovies, fetchPopularMovies } from "../getMovieData/MovieSlice/movieSlice";
import { TilesSection } from "../../common/TilesSection/styled";
import moment from "moment";
import MoviePagination from "../../common/Pagination/MoviePagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector(selectMovies);
  const { page } = useParams();
  const currentPage = page;
  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
}, [currentPage, dispatch]);

  return (
    <Content
      title="Popular Movies"
      body={
        <>
          <TilesSection>
            {movieList.map((movie) => (
              <TileMovie
                key={movie.id}
                movie={movie}
                genreIds={movie.genre_ids}
                releaseDate={moment(movie.release_date).format("YYYY")}
              />
            ))}
          </TilesSection>
        </>
      }
      pagination={
        <MoviePagination page={parseInt(currentPage)} />
      }
    />
  );
};

export default MovieList;
