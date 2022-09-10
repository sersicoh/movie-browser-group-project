import { all } from "redux-saga/effects";
import { movieSaga, fetchPopularMoviesWorker, fetchPopularPeopleWorker } from "./movieSaga";
import { peopleSaga } from "./movieSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(), 
    peopleSaga(), 
    fetchPopularMoviesWorker(),
    fetchPopularPeopleWorker(),
]);
}
