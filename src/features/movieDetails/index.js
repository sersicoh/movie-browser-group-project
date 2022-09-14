import Content from "../../common/Content";
import TileDetails from "./Details";
import Cast from "./Cast";
import Crew from "./Crew";
import PosterBig from "./PosterBig";

const MovieDetails = () => {
  return (
    <>
      <PosterBig />
      <Content
        body={
          <>
            <TileDetails />
            <Cast />
            <Crew />
          </>
        }
      />
    </>
  );
};

export default MovieDetails;
