import { all } from "redux-saga/effects";
import { movieSaga, fetchPopularMoviesWorker, fetchPopularPeopleWorker, movieDetailsSaga } from "./movieSaga";
import { peopleSaga } from "./movieSaga";
import { personDetailsSaga } from "./movieSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    movieDetailsSaga(),
    personDetailsSaga(),
    fetchPopularMoviesWorker(),
    fetchPopularPeopleWorker(),
    //fetchMovieDetailsWorker(),
  ]);
}
