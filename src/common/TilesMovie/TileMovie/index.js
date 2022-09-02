import MovieIcon from "../../../iconComponents/MovieIcon";
import { StyledDestription, StyledMovieIcon, StyledMovieTitle, StyledNoPoster, StyledPoster, StyledTileMovie } from "./styled";

const TileMovie = () => {

    const picture = false;
    
    const data = {
        picture: false,
        title: "Mulan",
        year: 2020,
        tags: ["action", "Adventure", "Drama"],
        rating: 7.8,
        votes: 30
    }

    return (
        <StyledTileMovie>
            {picture ?
                <StyledPoster
                /> :
                <StyledNoPoster>
                    <StyledMovieIcon>
                        <MovieIcon width={"100%"} height={"100%"} />
                    </StyledMovieIcon>
                </StyledNoPoster>}
            <StyledDestription>
                <StyledMovieTitle>{data.title}</StyledMovieTitle>

            </StyledDestription>

        </StyledTileMovie>
    );

};

export default TileMovie;
