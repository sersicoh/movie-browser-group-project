import Content from "../../common/Content";
import TileMovie from "../../common/TilesMovie/TileMovie";
import { TilesMovieSection } from "../../common/TilesMovie/TilesMovieSection/styled";


const MovieList = () => {

    return (
        <Content
            title="Popular Movies"
            body={
                <>
                    <TilesMovieSection>
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                    </TilesMovieSection>
                    <TilesMovieSection>
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                    </TilesMovieSection>
                </>

            }
        />
    )
};

export default MovieList;