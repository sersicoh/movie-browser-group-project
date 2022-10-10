import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name: "searchList",
   initialState: {
      searchList: [],
      total_results: null,
      total_pages: null,
      ifSearchLoading: "",
   },

   reducers: {
      setSearchList: (state, { payload: search }) => {
         state.searchList = search.results;
         state.total_results = search.total_results;
         state.total_pages = search.total_pages;
         state.ifSearchLoading = "success";
      },
      setSearchLoading: (state) => {
         state.ifSearchLoading = "loading";
      },
   },
});

export const { setSearchList, setSearchLoading } = searchSlice.actions;

export const selectSearchList = (state) => state.searchList;
export const selectTotalResults = (state) => state.total_results;
export const selectTotalPages = (state) => state.total_pages;
export const selectLoadingState = (state) => state.ifSearchLoading;

export default searchSlice.reducer;
