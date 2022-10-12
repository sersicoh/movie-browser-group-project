import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getSearch } from "./getData";
import { setSearchLoading, setSearchList, setError } from "./SearchSlice/searchSlice";

export function* fetchSearchWorker({ payload: searchParams }) {
   try {
      yield delay(1000);
      const searchList = yield call(getSearch, searchParams);
      yield put(setSearchList(searchList));
   } catch (error) {
      yield put(setError());
   }
};

export function* searchSaga() {
   yield takeLatest(setSearchLoading.type, fetchSearchWorker)
};