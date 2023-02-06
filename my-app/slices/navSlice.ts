import { createSlice } from "@reduxjs/toolkit";

type PropsState = {
  origin: {
    page: number;
  };
};
const initialState = {
  origin: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
  },
});

export const { setOrigin } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;

export default navSlice.reducer;
