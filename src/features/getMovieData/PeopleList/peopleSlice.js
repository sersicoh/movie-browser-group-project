import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",
  initialState: {
    peopleList: [],
    setPeopleLoading: false,
  },

  reducers: {
    fetchPopularPeople: (state) => {
      state.setPeopleLoading = true;
    },
      setPeopleList: (state, { payload: people }) => {
      state.peopleList = people.results;
      state.setPeopleLoading= false;
    },
    setLoading: (state) => {
      state.setPeopleLoading = false;
    },
  },
});

export const {
   fetchPopularPeople,
   setPeopleList,
  setPeopleLoading
} = peopleSlice.actions;

export const selectPeople = (state) => state.peopleList;

export default peopleSlice.reducer;

