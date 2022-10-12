import ErrorPage from "../../common/Error";

export const getPopularMovies = (pageNumber) => {
   const getPopularMovies = fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US&page=${pageNumber}`
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getPopularMovies;
};

export const getPopularPeople = (pageNumber) => {
   const getPopularPeople = fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US&page=${pageNumber}`
   ) 
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
   ) 
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
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getMovieDetails;
};
export const getPersonDetails = (personId) => {
   const getPersonDetails = fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getPersonDetails;
};

export const getMovieListForPerson = (personId) => {
   const getMovieListForPerson = fetch(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getMovieListForPerson;
};

export const getPeopleForMovie = (movieId) => {
   const getPeopleForMovie = fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US`
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getPeopleForMovie;
};

export const getSearch = (payload) => {
   const getSearch = fetch(
      `https://api.themoviedb.org/3/search/${payload.type}?${payload.query}&query=${payload.query}&api_key=9ca6b7689445c94b2e17d44de714a06b&language=en-US&page=${payload.page}`
   ) 
      .then((response) => {
         if (!response.ok) {
            throw new Error(response.statusText);
         }
         return response;
      })
      .then((response) => response.json());

   return getSearch;
};

