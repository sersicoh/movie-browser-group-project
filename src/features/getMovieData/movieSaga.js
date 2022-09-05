import {
    call,
    delay,
    put,
    takeLatest,
  } from "redux-saga/effects";
  import { getPopularMovies, getPopularPeople } from "./getData";
  import { fetchPopularMovies, setMovieList,} from "./MovieList/movieSlice";
  import { fetchPopularPeople, setPeopleList,} from "./PeopleList/peopleSlice";
  
 export function* fetchPopularMoviesWorker() {
    try {
      yield delay(1000);
        const popularMovies = yield call(getPopularMovies);
        yield put(setMovieList(popularMovies));
  
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
    yield takeLatest("*", fetchPopularMoviesWorker);
  }
  
  export function* peopleSaga() {

    yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleWorker);

    // yield takeLatest("*", fetchPopularMoviesWorker);
  }
  