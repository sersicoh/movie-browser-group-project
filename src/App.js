import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";
import PersonList from "./features/PersonList";
import MovieDetails from "./features/movieDetails";
import TileDetails from "./common/TileDetails/TileDetails";
// import MovieList from "../src/features/getMovieData/MovieList/index";
// import PeopleList from "../src/features/getMovieData/PeopleList/index";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationBar />
        <Switch>
          <Route path="/movies">
            <MovieList />
          </Route>
          <Route path="/people">
            <PersonList />
          </Route>
          <Route path="/movieDetails/:id">
            <TileDetails />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  );
}

export default App;
