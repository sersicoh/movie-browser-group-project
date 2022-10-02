import { all } from "redux-saga/effects";
import { movieSaga, movieDetailsSaga } from "./movieSaga";
import {peopleSaga } from "./peopleSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    movieDetailsSaga(),
  ]);
}
