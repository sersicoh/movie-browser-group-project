import { all } from "redux-saga/effects";
import { movieSaga, fetchPopularMoviesWorker } from "./movieSaga";
import { peopleSaga, fetchPopularPeopleWorker } from "./movieSaga";


export default function* rootSaga() {
    yield all([
        movieSaga(),
        peopleSaga(),
        fetchPopularMoviesWorker(),
        fetchPopularPeopleWorker()
    ]);
}