import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getPersonDetails, getMovieListForPerson } from "./getData";
import { fetchPopularPeople, setPeopleList, setPersonDetails, fetchPersonDetails, setMovieListForPerson, setError } from "./PeopleSlice/peopleSlice";

export function* fetchPopularPeopleWorker({ payload: pageNumber }) {
   try {
      yield delay(700);
      const popularPeople = yield call(getPopularPeople, pageNumber);
      yield put(setPeopleList(popularPeople));
   } catch (error) {
      yield put(setError());
   }
};

export function* fetchPersonDetailsWorker({ payload: personId }) {
   try {
      yield delay(700);
      const personDetails = yield call(getPersonDetails, personId);
      yield put(setPersonDetails(personDetails));
   } catch (error) {
      yield put(setError());
   }
};

export function* fetchMoviesForPerson({ payload: personId }) {
   try {
      yield delay(700);
      const moviesForPerson = yield call(getMovieListForPerson, personId);
      yield put(setMovieListForPerson(moviesForPerson));
   } catch (error) {
      yield put(setError());
   }
};

export function* peopleSaga() {
   yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);
   yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsWorker);
   yield takeLatest(fetchPersonDetails.type, fetchMoviesForPerson);
};
