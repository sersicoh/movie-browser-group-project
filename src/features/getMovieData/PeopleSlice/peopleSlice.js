import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",
  initialState: {
    peopleList: [],
    personDetails: [],
    cast: [],
    crew: [],
    ifPeopleLoading: false,
    ifLoading: "",
  },

  reducers: {
    fetchPopularPeople: (state) => {
      state.ifPeopleLoading = true;
    },
    setPeopleList: (state, { payload: people }) => {
      state.peopleList = people.results;
      state.ifPeopleLoading = false;
    },
    setLoadingg: (state) => {
      state.ifLoading = "loading";
    },
    setPersonDetails: (state, { payload: personDetails }) => {
      state.personDetails = personDetails;
      state.ifLoading = "success";
    },
    setMovieListForPerson: (state, { payload: moviesForPerson }) => {
      state.cast = moviesForPerson.cast;
      state.crew = moviesForPerson.crew;
      state.ifLoading = "success";
    },
  },
});

export const { fetchPopularPeople, setPeopleList, ifPeopleLoading, setLoadingg, setPersonDetails, setMovieListForPerson } =
  peopleSlice.actions;

export const selectPeople = (state) => state.peopleList;
export const selectPersonDetails = (state) => state.peopleList;

export default peopleSlice.reducer;
