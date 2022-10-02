import { all } from "redux-saga/effects";
import { movieSaga, fetchPopularMoviesWorker, movieDetailsSaga } from "./movieSaga";
import {fetchPopularPeopleWorker, peopleSaga } from "./peopleSaga";
import { personDetailsSaga } from "./movieSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    movieDetailsSaga(),
   // personDetailsSaga(),
    // fetchPopularMoviesWorker(),
    fetchPopularPeopleWorker(),
    //fetchMovieDetailsWorker(),
  ]);
}
