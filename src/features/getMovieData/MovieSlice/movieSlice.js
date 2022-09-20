import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    genreList: [],
    movieDetails: [],
    ifMovieDetailsLoading: "",
  },

  reducers: {
    fetchPopularMovies: (state) => {
      state.ifMoviesLoading = true;
    },
    fetchGenres: (state) => {
      state.ifMoviesLoading = true;
    },
    setMovieList: (state, { payload: movies }) => {
      state.movieList = movies.results;
      state.ifMoviesLoading = false;
      // console.log(state.movieList);
    },
    setGenreList: (state, { payload: genres }) => {
      state.genreList = genres.genres;
      // console.log(state.genreList);
    },
    setLoading: (state) => {
      state.ifMovieDetailsLoading = "loading";
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails = movieDetails;
      // poniższy console.log to wyrzucenia gdy nie bedzie potrzebny
      console.log(movieDetails);
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
 setMovieDetails
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
export const selectGenres = (state) => state.genreList;
export const selectMoviesDetails = (state) => state.movieList;
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

  