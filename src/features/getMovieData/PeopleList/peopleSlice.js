import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",
  initialState: {
    peopleList: [],
    ifPeopleLoading: false,
  },

  reducers: {
    fetchPopularPeople: (state) => {
      state.ifPeopleLoading = true;
    },
      setPeopleList: (state, { payload: people }) => {
      state.peopleList = people.results;
      state.ifPeopleLoading= false;
    },
    setLoading: (state) => {
      state.ifPeopleLoading = false;
    },
  },
});

export const {
   fetchPopularPeople,
   setPeopleList,
  ifPeopleLoading
} = peopleSlice.actions;

export const selectPeople = (state) => state.peopleList;

export default peopleSlice.reducer;

