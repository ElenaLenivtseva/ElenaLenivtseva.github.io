import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllUsersAsync = createAsyncThunk(
  "users/getAllUsers",
  async () => {
    const resp = await fetch("https://dummyjson.com/users");
    if (resp.ok) {
      const data = await resp.json();
      return data.users;
    }
  }
);

export const getFiltredUsersAsync = createAsyncThunk(
  "users/getFiltredUsers",
  async (obj) => {
    let arr = [];
    const keys = obj.keys;
    for (let i = 0; i < keys.length; i++) {
      const resp = await fetch(
        `https://dummyjson.com/users/filter?key=${keys[i]}&value=${obj.value}`
      );
      if (resp.ok) {
        const data = await resp.json();
        arr.push(...data.users);
      }
    }
    return arr;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getFiltredUsersAsync.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default usersSlice.reducer;
