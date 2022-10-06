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
    ifMovieDetailsLoading: "",
    ifLoading: false,
  },

  reducers: {
    fetchPopularMovies: (state) => {
      state.ifLoading = true;
    },
    fetchPopularMoviesPage: (state) => {
      state.ifLoading = true;
    },
    fetchGenres: (state) => {
      state.ifLoading = true;
    },
    setMovieList: (state, { payload: movies }) => {
      state.movieList = movies.results;
      state.moviePage = movies.page;
      state.ifLoading = false;
    },
    setGenreList: (state, { payload: genres }) => {
      state.genreList = genres.genres;
    },
    setLoading: (state) => {
      state.ifMovieDetailsLoading = "loading";
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      state.ifMovieDetailsLoading = "success";
    },
    setCastCrew: (state, { payload: castCrew }) => {
      state.cast = castCrew.cast;
      state.crew = castCrew.crew;
      state.ifMovieDetailsLoading = "success";
    },
  },
});

export const {
  fetchPopularMovies,
  fetchGenres,
  setMovieList,
  setLoading,
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
export const selectLoadingState = (state) => state.ifMovieDetailsLoading;
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
