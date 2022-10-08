import { all } from "redux-saga/effects";
import { movieSaga, movieDetailsSaga } from "./movieSaga";
import { peopleSaga } from "./peopleSaga";
import { searchSaga } from "./searchSaga";

export default function* rootSaga() {
  yield all([
    movieSaga(),
    peopleSaga(),
    searchSaga(),
  ]);
}
