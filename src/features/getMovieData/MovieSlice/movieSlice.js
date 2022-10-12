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
      setMovieList: (state, { payload: movies }) => {
         state.movieList = movies.results;
         state.moviePage = movies.page;
         state.total_pages = movies.total_pages;
         state.ifLoading = "success";
      },
      setGenreList: (state, { payload: genres }) => {
         state.genreList = genres.genres;
      },
      setError: (state) => {
         state.ifLoading = "error";
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
   setMovieList,
   setGenreList,
   fetchMovieDetails,
   setMovieDetails,
   setCastCrew,
   fetchPopularMoviesPage,
   setError,
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
export const selectGenres = (state) => state.genreList;

export default moviesSlice.reducer;
