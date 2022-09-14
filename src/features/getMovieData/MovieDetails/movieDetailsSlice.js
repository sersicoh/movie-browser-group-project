import { createSlice } from "@reduxjs/toolkit";

const moviesDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails:[],
    ifMovieDetailsLoading: false,
  },
  reducers: {
    setLoading: (state) => {
      state.ifMovieDetailsLoading = true;
      console.log("click");
    },
    setMovieDetails: (state, { payload: movieDetails }) => {
     // state.movieDetails.push(movieDetails);
     state.movieDetails = movieDetails;
      console.log(state.movieDetails);
      state.ifMovieDetailsLoading = false;
    },
  },
});

export const { setLoading, fetchMovieDetails, setMovieDetails } = moviesDetailsSlice.actions;
export const selectMoviesDetails = (state) => state.movieDetails;
export const getMovieById = (state, movieId) =>
  selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);
export default moviesDetailsSlice.reducer;