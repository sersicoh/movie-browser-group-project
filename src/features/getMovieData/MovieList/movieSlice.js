import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    genreList: [],
    ifMoviesLoading: false,
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
      console.log(state.movieList);
    },
    setLoading: (state) => {
      state.ifMoviesLoading = false;
    },
    setGenreList: (state, { payload: genres }) => {
      state.genreList = genres.genres;
      console.log(state.genreList);
    },
  },
});

export const {
  fetchPopularMovies,
  fetchGenres,
  setMovieList,
  setLoading,
  setGenreList,
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
export const selectGenres = (state) => state.genreList;
export const getMovieById = (state, movieId) =>
  selectMovies(state).movieList.find(({ id }) => id === movieId);
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
