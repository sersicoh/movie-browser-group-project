import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./common/Navigation";
import MovieList from "./features/Movieslist";
import PersonList from "./features/PersonList";
import MovieDetails from "./features/movieDetails";
import PersonDetails from "./features/personDetails";
import SearchResults from "./features/Search/SearchResults";
import NoResult from "./common/NoResult";

function App() {
  return (
    <HashRouter>
      <nav>
        <NavigationBar />
        <Routes>
          <Route
            path="*"
            element={
              <NoResult
                error404={<h1>404  </h1>}
                title={`Oops! This page doesn't exist! Please go back to Main Page :)`}
              />
            }
          />
          <Route path="/" element={<Navigate to="movies" />} />
          <Route path="/movies" element={<Navigate to="1" />} />
          <Route path="/people" element={<Navigate to="1" />} />
          <Route path="/movies/:page" element={<MovieList />} />
          <Route path="/people/:page" element={<PersonList />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/personDetails/:id" element={<PersonDetails />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </nav>
    </HashRouter>
  );
}

export default App;
