import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getMoviesDetails } from "./getData";
import { fetchMovieDetails, setLoading, setMovieDetails } from "./MovieDetails/movieDetailsSlice";

export function* fetchMovieDetailsWorker() {
  try {
    yield delay(100);
    const movieId = "610150";
    const movieDetails = yield call(getMoviesDetails, movieId);
    console.log(movieDetails);
    yield put(setMovieDetails(movieDetails));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}


export function* movieDetailsSaga() {
  yield takeLatest(setLoading.type, fetchMovieDetailsWorker);
}
