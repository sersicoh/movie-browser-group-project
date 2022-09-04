import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
    ifLoading: false,
  },

  reducers: {
 fetchPopularMovies: (state) => {
      state.ifLoading = true;
    },
    setMovieList: (state, { payload: movies }) => {
      state.movieList = movies.results;
      state.ifLoading= false;
    },
    setLoading: (state) => {
      state.ifLoading = false;
    },
  },
});

export const {
  fetchPopularMovies,
   setMovieList,
  setLoading
} = moviesSlice.actions;

export const selectMovies = (state) => state.movieList;
export const getMovieById = (state, movieId) => selectMovies(state).movieList.find(({id}) => id === movieId);
 export const selectMoviesByQuery = (state, query) => {
   const movieList = selectMovies(state);
   if (!query || query.trim() === "") {
      return movieList.movieList; 
 }

   return movieList.movieList.filter(({content}) => content.toUpperCase().includes(query.trim().toUpperCase()));

 }

export default moviesSlice.reducer;

