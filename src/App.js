import { HashRouter, Route, Switch, Routes, Navigate, Redirect } from "react-router-dom";
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
  <Routes>
  <Route path="/" element={<Navigate to="movies"/>}/>
    <Route path="/movies" element={<Navigate to="1"/>}/>
    <Route path="/people" element={<Navigate to="1"/>}/>
    <Route path="/movies/:page" element={<MovieList/>}/>
    <Route path="/people/:page" element={<PersonList/>}/>
    <Route path="/movieDetails/:id" element={ <MovieDetails />}/>
    <Route path="/personDetails/:id" element={<PersonDetails />}/>
  </Routes>    
</nav>              
</HashRouter>
  );
}

export default App;