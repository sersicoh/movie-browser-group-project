import { List } from "./styled";
import Test from "./test";
import { useSelector } from "react-redux";
import { selectMovies } from "./movieSlice";

const MovieList = () => {
  const { movieList } = useSelector(selectMovies);

  return (
    <List>
      {movieList.map((movie) => (
        <Test
          key={movie.id}
          id={movie.id}
          poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          title={movie.title}
          date={movie.release_date}
          genreIds={movie.genre_ids}
          rate={movie.vote_average}
          votes={movie.vote_count}
        />
      ))}
    </List>
  );
};

export default MovieList;

// <Button onClick={() => dispatch(fetchPopularMovies())} disabled={ifLoading}>
//      {ifLoading ? "Przykładowe zadania" : <Span>Przykładowe zadania</Span> }
//     </Button>

//       <MovieTile
//       key={movie.id}
//       id={movie.id}
//       poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//       {movie.title}
//       date={movie.release_date}
//       genreIds={movie.genre_ids}
//       rate={movie.vote_average}
//       votes={movie.vote_count}
//   />
