import { createSlice } from "@reduxjs/toolkit";

const moviesDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState: {
    movieDetails: [],
    ifMovieDetailsLoading: false,
  },
  reducers: {
    setLoading: (state) => {
      state.ifMovieDetailsLoading = true;
    },
    fetchMovieDetails: (state, { payload: movieDetails }) => {
      state.movieDetails.push(movieDetails);
      console.log("dupa1: " + movieDetails);
      state.ifMovieDetailsLoading = false;
    },
  },
});

export const { setLoading, fetchMovieDetails } = moviesDetailsSlice.actions;
export const selectMoviesDetails = state => state.movieDetails;
export default moviesDetailsSlice.reducer;