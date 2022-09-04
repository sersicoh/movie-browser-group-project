import {Navigation, Button} from "./styled";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectPeople, fetchPopularPeople} from "../PeopleList/peopleSlice";
import {selectMovies, fetchPopularMovies} from "../MovieList/movieSlice";



const Test = () => {
  const {setPeopleLoading} = useSelector(selectPeople);
  const {ifLoading} = useSelector(selectMovies);
  const dispatch = useDispatch();

return (
  <Navigation>
      <Button onClick={() => dispatch(fetchPopularMovies())} disabled={ifLoading}>
        FILMY
      </Button>
      <Button onClick={() => dispatch(fetchPopularPeople())} disabled={setPeopleLoading}>
        CZŁOWIEKI
      </Button>
  </Navigation>
);

};

export default Test;