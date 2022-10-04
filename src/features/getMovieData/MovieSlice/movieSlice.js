import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    moviePage: [],
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
      state.ifLoading = true;
    },
    setMovieList: (state, { payload: movies }) => {
      state.movieList = movies.results;
      state.moviePage = movies.page;
      state.ifLoading = "success";
      console.log(state.moviePage);
    },
    setGenreList: (state, { payload: genres }) => {
      state.genreList = genres.genres;
    },
    fetchMovieDetails: (state) => {
      state.ifLoading = "loading";
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.ifLoading = "success";
    },
    setCastCrew: (state, { payload: castCrew }) => {
      state.cast = castCrew.cast;
      state.crew = castCrew.crew;
      state.ifLoading = "success";
    },
  },
});

export const {
  fetchPopularMovies,
  fetchGenres,
  setMovieList,
  setLoadin,
  setGenreList,
 fetchMovieDetails, 
 setMovieDetails,
 setCastCrew,
 fetchPopularMoviesPage
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
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
