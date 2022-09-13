import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import { useSelector } from "react-redux";
import { selectMovies } from "../getMovieData/MovieList/movieSlice";
import { TilesSection } from "../../common/TilesSection/styled";
import moment from "moment";
import {selectPeople} from "../getMovieData/PeopleList/peopleSlice"
import { TilesPersonSection } from "../../common/TilesSection/styled";
import TilePerson from "../../common/TilePerson";
import PosterBig from "./PosterBig";

const MovieList = () => {
  const { movieList } = useSelector(selectMovies);
  const { peopleList } = useSelector(selectPeople);

  return (
    <>
    <PosterBig/>
    <Content
      body={
        <>
          {/* <TilesSection>
            {movieList.map((movie) => (
              <TileMovie
                key={movie.id}
                movie={movie}
                genreIds={movie.genre_ids}
                releaseDate={moment(movie.release_date).format("YYYY")}
              />
            ))}
          </TilesSection> */}
          
          <TilesPersonSection>
            Cast
                        {peopleList.map((person) => (
                            <TilePerson key={person.id} person={person} />
                        ))}
                    </TilesPersonSection>
                    <TilesPersonSection>
            Crew
                        {peopleList.map((person) => (
                            <TilePerson key={person.id} person={person} />
                        ))}
                    </TilesPersonSection>
        </>
      }
    />
    </>
  );
};

export default MovieList;
