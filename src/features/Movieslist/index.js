import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import { useSelector } from "react-redux";
import { selectMovies } from "../getMovieData/MovieList/movieSlice";
import { TilesSection } from "../../common/TilesSection/styled";


const MovieList = () => {

    const { movieList } = useSelector(selectMovies);

    return (
        <Content
            title="Popular Movies"
            body={
                <>
                    <TilesSection>
                        {movieList.map((movie) => (
                            <TileMovie key={movie.id} movie={movie} genreIds={movie.genre_ids} />
                        ))}
                    </TilesSection>
                </>
            }
        />
    )
};

export default MovieList;