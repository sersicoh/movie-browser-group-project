import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movieList",
   initialState: {
      movieList: [],
      moviePage: [],
      total_pages: [],
      genreList: [],
      movieDetails: [],
      cast: [],
      crew: [],
      ifLoading: "",
   },

   reducers: {
      fetchPopularMovies: (state) => {
         state.ifLoading = "loading";
      },
      fetchPopularMoviesPage: (state) => {
         state.ifLoading = "loading";
      },
      fetchGenres: (state) => {
         state.ifLoading = "loading";
      },
      setMovieList: (state, { payload: movies }) => {
         state.movieList = movies.results;
         state.moviePage = movies.page;
         state.total_pages = movies.total_pages;
         state.ifLoading = "success";
      },
      setGenreList: (state, { payload: genres }) => {
         state.genreList = genres.genres;
      },
      fetchMovieDetails: (state) => {
         state.ifLoading = "loading2";
      },
      setMovieDetails: (state, { payload: movieDetails }) => {
         state.movieDetails = movieDetails;
         state.ifLoading = "success2";
      },
      setCastCrew: (state, { payload: castCrew }) => {
         state.cast = castCrew.cast;
         state.crew = castCrew.crew;
         state.ifLoading = "success2";
      },
   },
});

export const {
   fetchPopularMovies,
   fetchGenres,
   setMovieList,
   setGenreList,
   fetchMovieDetails,
   setMovieDetails,
   setCastCrew,
   fetchPopularMoviesPage
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
export const selectTotalPages = (state) => state.total_pages;
export const selectMoviesDetails = (state) => state.movieList;
export const selectCast = (state) => state.cast;
export const selectGenres = (state) => state.genreList;
export const selectLoadingState = (state) => state.ifLoading;
export const getMovieById = (state, movieId) =>
   selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);

export const selectMoviesByQuery = (state, query) => {
   const movieList = selectMovies(state);
   if (!query || query.trim() === "") {
      return movieList.movieList;
   }
   return movieList.movieList.filter(({ content }) =>
      content.toUpperCase().includes(query.trim().toUpperCase())
   );
};

export default moviesSlice.reducer;
