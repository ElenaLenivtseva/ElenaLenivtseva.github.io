import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersAsync = createAsyncThunk("users/getAllUsers", async () => {
  const resp = await fetch("https://dummyjson.com/users");
  if (resp.ok) {
    const data = await resp.json();
    return data.users;
  }
});

  
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    allUsers: [],
    searchedUsers: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsersAsync.fulfilled, (state, action) => {
      return {...state, allUsers: action.payload};
    })
  },
});



export default usersSlice.reducer;
