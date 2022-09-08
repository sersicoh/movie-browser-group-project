import { HashRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";
import PersonList from "./features/PersonList";
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
        </Switch>
      </nav>
    </HashRouter>
  );
}

export default App;
