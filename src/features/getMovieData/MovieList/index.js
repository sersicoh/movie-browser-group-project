import { List, Movie, Content, Img } from "./styled";
import { useSelector } from "react-redux";
import { selectMovies } from "./movieSlice";

const MovieList = () => {
  const { movieList } = useSelector(selectMovies);

  return (
    <List>
      {movieList.map((movie) => (
        <Movie key={movie.id}>
          <Content>
            &nbsp;&nbsp;
            <Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </Content>
          <Content>ID: {movie.id}</Content>
          <Content>Tytuł: {movie.title}</Content>
          <Content>Data premiery: {movie.release_date}</Content>
          <Content>ID gatunku: {movie.genre_ids}</Content>
          <Content>Średnia ocena (1-10): {movie.vote_average}</Content>
          <Content>Ilość głosów: {movie.vote_count}</Content>
          <p></p>
        </Movie>
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
