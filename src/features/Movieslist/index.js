import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import { useSelector } from "react-redux";
import { selectMovies } from "../getMovieData/MovieSlice/movieSlice";
import { TilesSection } from "../../common/TilesSection/styled";
import moment from "moment";
import Pagination from "../../common/Pagination";

const MovieList = () => {

  const { movieList } = useSelector(selectMovies);

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
        <Pagination />
      }
    />
  );
};

export default MovieList;
