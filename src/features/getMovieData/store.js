import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import movieListReducer from "../getMovieData/MovieList/movieSlice";
import peopleListReducer from "../getMovieData/PeopleList/peopleSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movieList: movieListReducer,
    peopleList: peopleListReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
