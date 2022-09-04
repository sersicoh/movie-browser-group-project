<<<<<<< HEAD
import MovieList from "../src/features/getMovieData/MovieList/index";
import PeopleList from "../src/features/getMovieData/PeopleList/index";
import Test from "./features/getMovieData/Test/test"

function App() {
  return (
    <>
    <Test/>
    <MovieList/>
     <PeopleList/>
      <p>Ta strona jest w trakcie tworzenia, zajrzyj za jakiś czas 😉!</p>
    </>
=======
import { HashRouter, Route, Switch } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";
import PersonList from "./features/PersonList";

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
>>>>>>> main
  );
}

export default App;
