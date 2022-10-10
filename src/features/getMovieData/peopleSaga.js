import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getPersonDetails, getMovieListForPerson } from "./getData";
import { fetchPopularPeople, setPeopleList, setPersonDetails, fetchPersonDetails, setMovieListForPerson } from "./PeopleSlice/peopleSlice";

export function* fetchPopularPeopleWorker({ payload: pageNumber }) {
   try {
      yield delay(1000);
      const popularPeople = yield call(getPopularPeople, pageNumber);
      yield put(setPeopleList(popularPeople));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* fetchPersonDetailsWorker({ payload: personId }) {
   try {
      yield delay(1000);
      const personDetails = yield call(getPersonDetails, personId);
      yield put(setPersonDetails(personDetails));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* fetchMoviesForPerson({ payload: personId }) {
   try {
      yield delay(1000);
      const moviesForPerson = yield call(getMovieListForPerson, personId);
      yield put(setMovieListForPerson(moviesForPerson));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* peopleSaga() {
   yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);
   yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsWorker);
   yield takeLatest(fetchPersonDetails.type, fetchMoviesForPerson);
};
