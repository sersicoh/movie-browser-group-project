import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListReducer from "./MovieSlice/movieSlice";
import peopleListReducer from "./PeopleSlice/peopleSlice";
import genreListReducer from "./MovieSlice/movieSlice";
import movieDetailsReducer from "../getMovieData/MovieSlice/movieSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    peopleList: peopleListReducer,
    genreList: genreListReducer,
    movieDetails: movieDetailsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;