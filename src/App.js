import { HashRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationBar />
        <Switch>
          <Route path="/movies">
            <MovieList />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  );
}

export default App;
