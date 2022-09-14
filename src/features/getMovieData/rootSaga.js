import { all } from "redux-saga/effects";
import { fetchMovieDetailsWorker, movieDetailsSaga } from "./movieDetailsSaga";
import { movieSaga, fetchPopularMoviesWorker, fetchPopularPeopleWorker } from "./movieSaga";
import { peopleSaga } from "./movieSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    movieDetailsSaga(),
    fetchPopularMoviesWorker(),
    fetchPopularPeopleWorker(),
    // fetchMovieDetailsWorker(),
  ]);
}
