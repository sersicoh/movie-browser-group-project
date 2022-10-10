import Content from "../../../common/Content";
import TileMovie from "../../../common/TileMovie/index";
import { TilesSection } from "../../../common/TilesSection/styled";
import moment from "moment";

const Crew = ({ selectedCrew }) => {

   return (
      <Content
         title={"Movies - crew" + " (" + selectedCrew.length + ")"}
         body={
            <TilesSection>
               {selectedCrew.map((movie) => (
                  <TileMovie
                     key={movie.id}
                     movie={movie}
                     genreIds={movie.genre_ids}
                     releaseDate={moment(movie.release_date).format("YYYY")}
                  />
               ))}
            </TilesSection>
         }
      />
   );
};

export default Crew;