import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMoviesDetails } from "./getData";
import { fetchMovieDetails, setMovieDetails } from "./MovieDetails/movieDetailsSlice";

export function* fetchMovieDetailsWorker() {
  try {
    yield delay(1000);
    const movieId = "985939";
    const movieDetails = yield call(getMoviesDetails, movieId);
    console.log(movieDetails);
    yield put(fetchMovieDetails(movieDetails));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}


export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
}
