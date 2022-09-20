import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getMoviesDetails } from "./getData";
import { setLoading, setMovieDetails } from "./MovieList/movieSlice";

export function* fetchMovieDetailsWorker({payload: movieId}) {
  try {
    yield delay(100);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}


export function* movieDetailsSaga() {
  yield takeLatest(setLoading.type, fetchMovieDetailsWorker);
}
