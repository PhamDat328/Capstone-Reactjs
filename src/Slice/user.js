import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userAPI from "../Services/userAPI";

let user = {};
if (localStorage.getItem("userLogin")) {
  user = JSON.parse(localStorage.getItem("userLogin"));
}

const initialState = {
  userLogin: user,
};

export const handleUserLogin = createAsyncThunk("user/userLogin", async (params) => {
  try {
    const result = await userAPI.userLogin(params);
    return { userLogin: result.data.content };
  } catch (error) {
    console.log(error.response.data);
  }
});

const userLoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [handleUserLogin.pending]: (state, { payload }) => {},
    [handleUserLogin.fulfilled]: (state, { payload }) => {
      state.userLogin = payload.userLogin;
      localStorage.setItem("userLogin", JSON.stringify(state.userLogin));
      localStorage.setItem("accessToken", state.userLogin.accessToken);
    },
    [handleUserLogin.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

const userReducer = combineReducers({
  userLoginSlice: userLoginSlice.reducer,
});

export default userReducer;
