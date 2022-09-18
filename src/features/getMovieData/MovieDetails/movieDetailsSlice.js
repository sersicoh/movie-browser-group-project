import { createSlice } from "@reduxjs/toolkit";

const moviesDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    movieDetails: [],
    ifMovieDetailsLoading: "",
  },
  reducers: {
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

export const { setLoading, fetchMovieDetails, setMovieDetails } = moviesDetailsSlice.actions;
export const selectMoviesDetails = (state) => state.movieDetails;
export const selectLoadingState = (state) => state.ifMovieDetailsLoading;
export const getMovieById = (state, movieId) =>
  selectMoviesDetails(state).movieDetails.find(({ id }) => id === movieId);
export default moviesDetailsSlice.reducer;