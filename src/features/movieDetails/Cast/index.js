import Content from "../../../common/Content";
import { TilesPersonSection } from "../../../common/TilesSection/styled";
import TilePerson from "../../../common/TilePerson";

const Cast = ({ selectedCast }) => {

   return (
      <Content title={"Cast" + " (" + selectedCast.length + ")"}
         body={
            <TilesPersonSection>
               {selectedCast.map((person) => (
                  <TilePerson key={person.id + "_" + person.job} person={person} personRole={person.character} />
               ))}
            </TilesPersonSection>
         }
      />
   );
};

export default Cast;