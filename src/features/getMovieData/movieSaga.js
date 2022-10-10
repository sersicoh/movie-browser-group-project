import { call, delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { getPopularMovies, getGenres, getMoviesDetails, getPeopleForMovie, getPopularMoviesPage } from "./getData";
import { fetchPopularMovies, setMovieList } from "./MovieSlice/movieSlice";
import { fetchGenres, setGenreList, fetchPopularMoviesPage } from "./MovieSlice/movieSlice";
import { fetchMovieDetails, setMovieDetails, setCastCrew } from "./MovieSlice/movieSlice";

export function* fetchPopularMoviesWorker({ payload: pageNumber }) {
   try {
      yield delay(1000);
      const popularMovies = yield call(getPopularMovies, pageNumber);
      yield put(setMovieList(popularMovies));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* fetchGenresWorker() {
   try {
      const genres = yield call(getGenres);
      yield put(setGenreList(genres));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* fetchMovieDetailsWorker({ payload: movieId }) {
   try {
      yield delay(1000);
      const movieDetails = yield call(getMoviesDetails, movieId);
      yield put(setMovieDetails(movieDetails));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* fetchCastCrewWorker({ payload: movieId }) {
   try {
      yield delay(1000);
      const castCrew = yield call(getPeopleForMovie, movieId);
      yield put(setCastCrew(castCrew));
   } catch (error) {
      yield call(alert("coś poszło nie tak! Spróbuj później :)"));
   }
};

export function* movieSaga() {
   yield takeLatest(fetchGenres.type, fetchGenresWorker);
   yield takeLeading("*", fetchGenresWorker);
   yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesWorker);
   yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsWorker);
   yield takeLatest(fetchMovieDetails.type, fetchCastCrewWorker);
};
