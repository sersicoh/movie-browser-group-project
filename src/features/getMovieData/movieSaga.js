import { call, delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { getPopularMovies, getPopularPeople, getGenres, getMoviesDetails, getPersonDetails, getPeopleForMovie, getMovieListForPerson } from "./getData";
import { fetchPopularMovies, setMovieList } from "./MovieSlice/movieSlice";
import { fetchGenres, setGenreList } from "./MovieSlice/movieSlice";
import { fetchPopularPeople, setPeopleList, setPersonDetails, setLoadingg, setMovieListForPerson } from "./PeopleSlice/peopleSlice";
import { setLoading, setMovieDetails, setCastCrew } from "./MovieSlice/movieSlice";

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
export function* fetchMovieDetailsWorker({payload: movieId}) {
  try {
    yield delay(1000);
    const movieDetails = yield call(getMoviesDetails, movieId);
    yield put(setMovieDetails(movieDetails));
  } catch (error) {
    yield call(alert("coś poszło nie tak! Spróbuj później :)"));
  }
}

export function* fetchCastCrewWorker({payload: movieId}) {
  try {
    yield delay(1000);
    const castCrew = yield call(getPeopleForMovie, movieId);
    yield put(setCastCrew(castCrew));
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


export function* movieSaga() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesWorker);
  yield takeLatest(fetchGenres.type, fetchGenresWorker);
  yield takeLeading("*", fetchGenresWorker);
}
export function* peopleSaga() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);
}
export function* movieDetailsSaga() {
  yield takeLatest(setLoading.type, fetchMovieDetailsWorker);
  yield takeLatest(setLoading.type, fetchCastCrewWorker);
}
export function* personDetailsSaga() {
  yield takeLatest(setLoadingg.type, fetchPersonDetailsWorker);
  yield takeLatest(setLoadingg.type, fetchMoviesForPerson);
}








