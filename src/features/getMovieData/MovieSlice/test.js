import { Movie, Content, Img } from "./styled";
import { useSelector } from "react-redux";
import { selectGenres } from "./movieSlice";

const Test = ({ poster, title, date, genreIds, rate, votes, id }) => {
  const { genreList } = useSelector(selectGenres);

  return (
    <Movie>
      <Content>
        &nbsp;&nbsp;
        <Img src={poster} />
      </Content>
      <Content>ID: {id}</Content>
      <Content>Tytuł: {title}</Content>
      <Content>Data premiery: {date}</Content>
      <Content>ID gatunku: {genreIds}</Content>
      <Content>
        Gatunek:
        {genreList.map(
          (genre) =>
            genreIds.includes(genre.id) && (
              <span key={genre.id}> {genre.name}</span>
            )
        )}
      </Content>
      <Content>Średnia ocena (1-10): {rate}</Content>
      <Content>Ilość głosów: {votes}</Content>
      <p></p>
    </Movie>
  );
};

export default Test;

// TEN MODUŁ IMITUJE MovieTile
