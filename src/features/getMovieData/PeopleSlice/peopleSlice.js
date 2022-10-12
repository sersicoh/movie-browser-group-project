import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
   name: "peopleList",
   initialState: {
      peopleList: [],
      total_pages: [],
      personDetails: [],
      cast: [],
      crew: [],
      ifLoading: "",
   },

   reducers: {
      fetchPopularPeople: (state) => {
         state.ifLoading = "loading";
      },
      setPeopleList: (state, { payload: people }) => {
         state.peopleList = people.results;
         state.total_pages = people.total_pages;
         state.ifLoading = "success";
      },
      fetchPersonDetails: (state) => {
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

export const {
   fetchPopularPeople,
   setPeopleList,
   fetchPersonDetails,
   setPersonDetails,
   setMovieListForPerson
} = peopleSlice.actions;

export const selectPeople = (state) => state.peopleList;
export const selectPersonDetails = (state) => state.peopleList;

export default peopleSlice.reducer;
