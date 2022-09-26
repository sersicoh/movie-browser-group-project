import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";
import PersonList from "./features/PersonList";
import MovieDetails from "./features/movieDetails";
import PersonDetails from "./features/personDetails";

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
            <MovieDetails />
          </Route>
          <Route path="/personDetails/:id">
            <PersonDetails />
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


{/* <HashRouter>
<nav>
  <NavigationBar />
  <Routes>
  <Route path="/" element={<Navigate to="movies"/>}/>
    <Route path="/movies" element={<Navigate to="page=1"/>}/>
    <Route path="/people" element={<Navigate to="page=1"/>}/>
    <Route path="/movies/page=:page" element={<MovieList/>}/>
    <Route path="/people/page=:page" element={<PersonList/>}/>
    <Route path="/movieDetails/:id" element={ <MovieDetails />}/>
    <Route path="/personDetails/:id" element={<PersonDetails />}/>
  </Routes>
</nav> 
</HashRouter>*/}