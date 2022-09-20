export const getPopularMovies = () => {
  const getPopularMovies = fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US&page=1"
  ) //adres popularnych filmów
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getPopularMovies;
};

export const getPopularPeople = () => {
  const getPopularPeople = fetch(
    "https://api.themoviedb.org/3/person/popular?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US&page=1"
  ) //adres popularnych ludzi
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getPopularPeople;
};

export const getGenres = () => {
  const getGenres = fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US"
  ) //Lista gatunków filmowych
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getGenres;
};
export const getMoviesDetails = (movieId) => {
  const getMovieDetails = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
  ) //Detale konkretnego filmu
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getMovieDetails;
};

export const getMovieListForPerson = (personId) => {
  const getMovieDetails = fetch(
    `https://api.themoviedb.org/3/person/100/movie_credits?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
  ) //Lista filmów w których uczestniczył aktor/technik
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getMovieDetails;
};

export const getPeopleForMovie = (movieId) => {
  const getMovieDetails = fetch(
    `https://api.themoviedb.org/3/movie/100/credits?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
  ) //Lista obsady dla konkretnego filmu
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response;
    })
    .then((response) => response.json());

  return getMovieDetails;
};

