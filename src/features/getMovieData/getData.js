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
