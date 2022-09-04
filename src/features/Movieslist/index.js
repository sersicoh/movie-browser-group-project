import Content from "../../common/Content";
import TileMovie from "../../common/TileMovie";
import { TilesSection } from "../../common/TilesSection/styled";


const MovieList = () => {

    return (
        <Content
            title="Popular Movies"
            body={
                <>
                    <TilesSection>
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                    </TilesSection>
                    <TilesSection>
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                        <TileMovie />
                    </TilesSection>
                </>

            }
        />
    )
};

export default MovieList;