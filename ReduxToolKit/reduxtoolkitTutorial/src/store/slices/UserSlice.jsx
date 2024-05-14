import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", // name of the slice
  initialState: [], // initial state for user state
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.splice(action.payload, 1);
    },
    deleteAllUsers: (state, action) => {
      return [];
    },
  },
});

console.log(userSlice.actions);

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, deleteAllUsers } = userSlice.actions;

export default userSlice.reducer;
