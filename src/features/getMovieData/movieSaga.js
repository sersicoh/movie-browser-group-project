import { call, delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { getPopularMovies, getPopularPeople, getGenres } from "./getData";
import { fetchPopularMovies, setMovieList } from "./MovieSlice/movieSlice";
import { fetchGenres, setGenreList } from "./MovieSlice/movieSlice";
import { fetchPopularPeople, setPeopleList } from "./PeopleSlice/peopleSlice";

export function* fetchPopularMoviesWorker() {
  try {
    yield delay(1000);
    const popularMovies = yield call(getPopularMovies);
    yield put(setMovieList(popularMovies));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* fetchGenresWorker() {
  try {
    const genres = yield call(getGenres);
    yield put(setGenreList(genres));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* fetchPopularPeopleWorker() {
  try {
    yield delay(1000);
    const popularPeople = yield call(getPopularPeople);
    yield put(setPeopleList(popularPeople));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}
export function* movieSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesWorker);
  yield takeLatest(fetchGenres.type, fetchGenresWorker);
  yield takeLeading("*", fetchGenresWorker);
}
export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);
}
