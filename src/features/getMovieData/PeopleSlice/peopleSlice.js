import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "peopleList",
  initialState: {
    peopleList: [],
    personDetails: [],
    ifPeopleLoading: false,
    ifLoading: "",
  },

  reducers: {
    fetchPopularPeople: (state) => {
      state.ifPeopleLoading = true;
    },
    setPeopleList: (state, { payload: people }) => {
      state.peopleList = people.results;
      console.log(state.peopleList);
      state.ifPeopleLoading = false;
    },
    setLoading: (state) => {
      state.ifLoading = "loading";
    },
    setPersonDetails: (state, { payload: personDetails }) => {
      state.personDetails = personDetails;
      // poniższy console.log to wyrzucenia gdy nie bedzie potrzebny
      console.log(personDetails);
      state.ifLoading = "success";
    },
  },
});

export const { fetchPopularPeople, setPeopleList, ifPeopleLoading, setLoading, setPersonDetails } =
  peopleSlice.actions;

export const selectPeople = (state) => state.peopleList;
export const selectPersonDetails = (state) => state.peopleList;

export default peopleSlice.reducer;
