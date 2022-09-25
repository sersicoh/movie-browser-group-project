import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPopularPeople, getPersonDetails, getMovieListForPerson } from "./getData";
import { fetchPopularPeople, setPeopleList, setPersonDetails, setLoadingg, setMovieListForPerson } from "./PeopleSlice/peopleSlice";


export function* fetchPopularPeopleWorker() {
  try {
    yield delay(1000);
    const popularPeople = yield call(getPopularPeople);
    yield put(setPeopleList(popularPeople));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* fetchPersonDetailsWorker({payload: personId}) {
  try {
    yield delay(1000);
    const personDetails = yield call(getPersonDetails, personId);
    yield put(setPersonDetails(personDetails));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* fetchMoviesForPerson({payload: personId}) {
  try {
    yield delay(1000);
    const moviesForPerson = yield call(getMovieListForPerson, personId);
    yield put(setMovieListForPerson(moviesForPerson));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);
  yield takeLatest(setLoadingg.type, fetchPersonDetailsWorker);
  yield takeLatest(setLoadingg.type, fetchMoviesForPerson);
}








