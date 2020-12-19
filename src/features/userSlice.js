import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    darkmode: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkmode = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout, setDarkMode } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectDarkmode = (state) => state.user.darkmode;

export default userSlice.reducer;
