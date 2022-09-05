import {Navigation, Button} from "./styled";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectPeople, fetchPopularPeople} from "../PeopleList/peopleSlice";
import {selectMovies, fetchPopularMovies} from "../MovieList/movieSlice";



const Test = () => {
  const {ifPeopleLoading} = useSelector(selectPeople);
  const {ifMoviesLoading} = useSelector(selectMovies);
  const dispatch = useDispatch();

return (
  <Navigation>
      <Button onClick={() => dispatch(fetchPopularMovies())} disabled={ifMoviesLoading}>
        FILMY
      </Button>
      <Button onClick={() => dispatch(fetchPopularPeople())} disabled={ifPeopleLoading}>
        CZŁOWIEKI
      </Button>
  </Navigation>
);

};

export default Test;