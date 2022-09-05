import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    movieGenres: [],
    ifMoviesLoading: false,
  },

  reducers: {
    fetchPopularMovies: (state) => {
      state.ifMoviesLoading = true;
    },
    setMovieList: (state, { payload: movies }) => {
      state.movieList = movies.results;
      state.ifMoviesLoading = false;
    },
    setLoading: (state) => {
      state.ifMoviesLoading = false;
    },
    setGenreList: (state, { payload: genre_ids }) => {
      state.movieList = genre_ids.results;
      state.ifMoviesLoading = false;
    },
  },
});

export const { fetchPopularMovies, setMovieList, setLoading } =
  moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
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
